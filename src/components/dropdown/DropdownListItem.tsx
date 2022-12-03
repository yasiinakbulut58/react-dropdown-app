import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';

import './Dropdown.scoped.scss';
import type { Insurance } from './DropdownList';

type Props = {
  data: Insurance;
};

const DropdownListItem: React.FC<Props> = ({ data }) => {
  return (
    <Box className="dropdown-item">
      <div className="detail-name">{data.name}</div>
      <div className="detail-info">
        <div className="info-box">
          <PhoneIcon />
          <span>{data.phone}</span>
        </div>
        <div className="info-box">
          <AlternateEmailIcon />
          <span>{data.mail}</span>
        </div>
        <div className="info-box">
          <ArticleIcon />
          <span>{data.policyNo}</span>
        </div>
      </div>
    </Box>
  );
};

export default DropdownListItem;
