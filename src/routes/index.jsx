import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

// Escolha o tipo de navegação:
// "stack"  = navegação por pilhas
// "bottom" = navegação por abas inferiores
// "drawer" = navegação por menu lateral

const TIPO_DE_NAVEGACAO = "stack";

export function Routes() {
  return (
    <NavigationContainer>
      {TIPO_DE_NAVEGACAO === "stack" && <StackRoutes />}
      {TIPO_DE_NAVEGACAO === "bottom" && <BottomRoutes />}
      {TIPO_DE_NAVEGACAO === "drawer" && <DrawerRoutes />}
    </NavigationContainer>
  );
}
