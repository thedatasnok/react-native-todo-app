import { GluestackUIProvider, config } from '@gluestack-ui/themed';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import '@/config/firebase';

export type Todo = {
  name: string;
  notes: string;
  createdAt: Date;
  completedAt: Date | null;
};

export type TodoList = {
  name: string;
  todos: Todo[];
};

export default function App() {
  const [_todoLists, _setTodoLists] = useState<TodoList[]>([]);

  return (
    <GluestackUIProvider config={config.theme}>
      <Slot />

      <StatusBar />
    </GluestackUIProvider>
  );
}
