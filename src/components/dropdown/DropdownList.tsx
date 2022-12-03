import Box from '@mui/material/Box';

import DropdownListItem from './DropdownListItem';

export type Insurance = {
  id: number;
  name: string;
  mail: string;
  phone: string;
  policyNo: string;
};

type Props = {
  list: Insurance[];
};

const DropdownList: React.FC<Props> = ({ list }) => {
  return (
    <Box className="result-wrapper">
      {list.map((item) => (
        <DropdownListItem key={item.id} data={item} />
      ))}
    </Box>
  );
};

export default DropdownList;
