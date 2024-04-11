<script setup lang="ts">
import { usePocketBase } from '@/hooks/usePocketBase';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import * as zod from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { useToast } from '@/components/ui/toast/use-toast';

const router = useRouter();
const { toast } = useToast();

const formSchema = toTypedSchema(
  zod.object({
    userName: zod.string().min(1),
    password: zod.string().min(1)
  })
);

const form = useForm({
  validationSchema: formSchema
});

const { pb, authWithUserAndPassword } = usePocketBase();

const onAuth = form.handleSubmit(async (authData) => {
  await authWithUserAndPassword(authData.userName, authData.password);

  if (pb.authStore.isValid) {
    router.push('/');
  } else {
    toast({
      title: 'Ошибка входа',
      description: 'Проверьте корректность данных'
    });
  }
});
</script>

<template>
  <Card>
    <form @submit="onAuth">
      <CardHeader>
        <CardTitle>Вход</CardTitle>

        <CardDescription> Введите данные для входа, чтобы продолжить </CardDescription>
      </CardHeader>
      <CardContent>
        <FormField v-slot="{ componentField }" name="userName">
          <FormItem>
            <FormLabel> Пользователь </FormLabel>

            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>

            <FormDescription> Имя или почта </FormDescription>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel> Пароль </FormLabel>

            <FormControl>
              <Input type="password" v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>
      </CardContent>

      <CardFooter>
        <Button type="submit" variant="secondary">Войти</Button>
      </CardFooter>
    </form>
  </Card>
</template>
