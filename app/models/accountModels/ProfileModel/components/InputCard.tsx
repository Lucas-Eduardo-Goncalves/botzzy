import { useId } from "react";
import { Card, Input } from "~/client/components";
import { globalStyles } from "~/client/styles";

type InputCardProps = {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  name: string;
  error?: null;
};

const { vars } = globalStyles;
export function InputCard({
  label,
  defaultValue,
  isDisabled,
  placeholder,
  name,
  error,
}: InputCardProps) {
  const id = useId();
  return (
    <Card align="center" spacing={8} wrap="wrap" justify="space-between">
      <label
        htmlFor={id}
        style={{ fontWeight: vars.fontWeights.bold, flex: 1 }}
      >
        {label}
      </label>
      <Card direction="column" style={{ flex: 2 }}>
        <Input
          id={id}
          name={name}
          error={error}
          disabled={isDisabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </Card>
    </Card>
  );
}
