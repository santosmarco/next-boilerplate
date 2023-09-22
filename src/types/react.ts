import type { IsEqual } from "type-fest";
import type { UNSET } from "./utils";

export type ReactComponent<
  TProps extends Record<string, unknown> | UNSET = UNSET,
> = React.FC<
  React.PropsWithChildren<
    IsEqual<TProps, UNSET> extends true ? unknown : TProps
  >
>;
