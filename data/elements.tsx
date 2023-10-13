import { ControllerTypes, Icons, SensorTypes } from "@/interfaces";

export const nodes = [
  {
    id: "1",
    type: "custom",
    data: {
      withParent: false,
      withChildren: true,
      controllerType: ControllerTypes.none,
      icon: Icons.bed,
      label: "Bedroom",
    },
  },
  {
    id: "2",
    type: "custom",
    data: {
      parentId: "1",
      withParent: true,
      withChildren: false,
      controllerType: ControllerTypes.sensor,
      sensorType: SensorTypes.temperature,
      icon: Icons.temperature,
      label: "Bedroom DHT22",
      url: "http://localhost:3000/bedroom/temperature",
    },
  },
  {
    id: "3",
    type: "custom",
    data: {
      parentId: "1",
      withParent: true,
      withChildren: false,
      controllerType: ControllerTypes.sensor,
      sensorType: SensorTypes.humidity,
      icon: Icons.humidity,
      label: "Bedroom DHT22",
      url: "http://localhost:3000/bedroom/humidity",
    },
  },
  {
    id: "4",
    type: "custom",
    data: {
      parentId: "1",
      withParent: true,
      withChildren: false,
      controllerType: ControllerTypes.plug,
      icon: Icons.plug,
      label: "Fan plug",
      url: "http://localhost:3000/bedroom/fan",
    },
  },

  {
    id: "5",
    type: "custom",
    data: {
      withParent: false,
      withChildren: true,
      controllerType: ControllerTypes.none,
      icon: Icons.living,
      label: "Living",
    },
  },
  {
    id: "6",
    type: "custom",
    data: {
      parentId: "5",
      withParent: true,
      withChildren: false,
      controllerType: ControllerTypes.switch,
      icon: Icons.switch,
      label: "Light right",
      url: "http://localhost:3000/living/light-right",
    },
  },
  {
    id: "7",
    type: "custom",
    data: {
      parentId: "5",
      withParent: true,
      withChildren: false,
      controllerType: ControllerTypes.switch,
      icon: Icons.switch,
      label: "Light left",
      url: "http://localhost:3000/living/light-left",
    },
  },

  {
    id: "8",
    type: "custom",
    data: {
      withParent: false,
      withChildren: true,
      controllerType: ControllerTypes.none,
      icon: Icons.living,
      label: "Kitchen",
    },
  },
  {
    id: "9",
    type: "custom",
    data: {
      parentId: "8",
      withParent: true,
      withChildren: false,
      controllerType: ControllerTypes.sensor,
      sensorType: SensorTypes.carbono,
      icon: Icons.carbono,
      label: "Kitchen Gas",
      url: "http://localhost:3000/kitcken/carbono",
    },
  },
  {
    id: "10",
    type: "custom",
    data: {
      parentId: "8",
      withParent: true,
      withChildren: false,
      controllerType: ControllerTypes.sensor,
      sensorType: SensorTypes.temperature,
      icon: Icons.humidity,
      label: "Kitchen Temperature",
      url: "http://localhost:3000/kitchen/temperature",
    },
  },
];
