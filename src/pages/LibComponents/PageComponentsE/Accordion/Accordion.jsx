import Accordion from 'apollo-react/components/Accordion';
import AccordionDetails from 'apollo-react/components/AccordionDetails';
import AccordionSummary from 'apollo-react/components/AccordionSummary';
import Divider from 'apollo-react/components/Divider';
import Typography from 'apollo-react/components/Typography';

import styles from './Accordion.module.scss';

export default function BlockBanner() {
    return (
        <div className={[styles['accordion']].join(' ')}>
            <div>
                <Accordion defaultExpanded>
                    <AccordionSummary>
                        <Typography>This is accordion section title</Typography>
                        <Typography>Subtitle</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div style={{ fontSize: 13, paddingTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography>This is accordion section title</Typography>
                        <Typography>Subtitle</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{ fontSize: 13, paddingTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography>This is accordion section title</Typography>
                        <Typography>Subtitle</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{ fontSize: 13, paddingTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <Typography>This is accordion section title</Typography>
                        <Typography>Subtitle</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{ fontSize: 13 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
