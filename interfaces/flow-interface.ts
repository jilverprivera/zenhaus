import { SensorTypes, ControllerTypes, Icons } from "./enums";

export interface IFlow {
  id: string;
  type: string;
  position?: IFlowPosition;
  data: {
    parentId?: string;
    withParent: boolean;
    withChildren: boolean;
    childrenCount?: number;
    controllerType: ControllerTypes;
    sensorType?: SensorTypes;
    icon: Icons;
    label: string;
    url?: string;
  };
}
export interface IFlowExtended extends IFlow {
  children: IFlow[];
}

interface IFlowPosition {
  x: number;
  y: number;
}
