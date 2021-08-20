// import { React, useState } from "react";
// import { Accordion, Card, Button } from "react-bootstrap";
// import Collapse from "./Collapse";

// export default function CollapseGroup({ info }) {
//   return (
//     <Accordion defaultActiveKey="0">
//       {info.map((s) => (
//         <Collapse
//           title={s.title}
//           eventKey={s.key}
//           children={s.children}
//         />
//       ))}
//     </Accordion>
//   );
// }

import { React, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import Collapse from "./Collapse";

export default function CollapseGroup({ info, style = null }) {
  console.log(style)
  return (
    <Accordion defaultActiveKey="0">
      {info.map((s) => (
        <Collapse
          title={s.title}
          description={s.description}
          eventKey={s.key}
          children={s.children}
          hasProgressBar={s.hasProgressBar}
          styleX={style}
        />
      ))}
    </Accordion>
  );
}
