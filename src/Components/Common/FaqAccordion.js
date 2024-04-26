import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ReusableAccordion = ({ title, content }) => (
  <Accordion> {/* Space between accordions */}
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography><span style={{ fontFamily: "outfit", fontSize: "30px", fontWeight: "500" }}>{title}</span></Typography> {/* Dynamic title */}
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{content}</Typography> {/* Dynamic content */}
    </AccordionDetails>
  </Accordion>
);

export default ReusableAccordion;
