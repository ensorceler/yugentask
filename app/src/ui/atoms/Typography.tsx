import { Text } from "react-native";
import * as React from "react";
import clsx from "clsx";
import twFusion from "../../utils/twFusion";

interface Props {
  twClassName?: string;
  fw: "light" | "medium" | "regular" | "semiBold" | "bold";
  children: React.ReactNode;
  numberOfLines?: number;
}

export default function Typography({
  fw,
  twClassName,
  numberOfLines,
  children,
  ...props
}: Props) {
  return (
    <Text
      numberOfLines={numberOfLines}
      {...props}
      className={twFusion(
        `text-greyScale-900`,
        clsx(
          fw === "light" && `font-spaceLight `,
          fw === "medium" && `font-spaceMedium`,
          fw === "regular" && `font-spaceRegular `,
          fw === "semiBold" && `font-spaceSemiBold `,
          fw === "bold" && `font-spaceBold `,
          twClassName && `${twClassName}`
        )
      )}
    >
      {children}
    </Text>
  );
}
