import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useEffect, useState } from 'react';

import { useGetServices } from '../../api/services';

type Props = {
  checked: number[];
  onChange: (value: number[]) => void;
};

const ServicesCheck = ({ checked, onChange }: Props) => {
  const { data } = useGetServices();

  const [value, setValue] = useState(checked);

  useEffect(() => {
    onChange(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleChange = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setValue((prevValue) => [...prevValue, id]);
    } else {
      setValue((prevValue) => prevValue.filter((item) => item !== id));
    }
  };

  return (
    <FormGroup>
      {data!.map((item) => (
        <FormControlLabel
          key={item.id}
          control={
            <Checkbox
              checked={value.includes(item.id)}
              onChange={(_, isChecked) => {
                handleChange(item.id, isChecked);
              }}
              name={String(item.id)}
            />
          }
          label={item.name}
        />
      ))}
    </FormGroup>
  );
};

export default ServicesCheck;
