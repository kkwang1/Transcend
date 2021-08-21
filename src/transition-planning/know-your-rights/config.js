import QuickLinks from "../../components/QuickLink/QuickLinks";

const dashboardInfo = [
  {
    schoolsInfo: [
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
    ],
  },
  {
    title: "PRIVATE GROUP HOMES",
    desc: "Group homes managed by private organizations or individuals.",
    FundingsInfo: [
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
      {
        name: "Funding 1",
        location: "New York, NY",
      },
      {
        name: "Funding 2",
        location: "New York, NY",
      },
      {
        name: "Funding 3",
        location: "New York, NY",
      },
      {
        name: "Funding 4",
        location: "New York, NY",
      },
    ],
  },
];
const quickLinks = [
  {
    title: "PA Department of Human Services",
    url: "https://www.dhs.pa.gov/Services/Disabilities-Aging/Pages/default.aspx",
  },
  {
    title: "Office of Developmental Programs",
    url: "https://navigateresources.net/penn/MatchList.aspx?c;;0;;N;0;114138;Disability%20Services;Housing;1376;Supported%20Living%20Services%20for%20Adults%20With%20Disabilities",
  },
  {
    title: "Office of Vocational Rehabiliation",
    url: "https://navigateresources.net/penn/MatchList.aspx?c;;0;;N;0;114138;Disability%20Services;Housing;1376;Supported%20Living%20Services%20for%20Adults%20With%20Disabilities",
  },
];

const collapseInfo = [
  {
    title: "WORKPLACE",
    key: "0",
    children: <QuickLinks info={quickLinks} />,
  },
  {
    title: "EDUCATIONAL PRACTICES",
    key: "1",
    children: <QuickLinks info={quickLinks} />,
  },
  {
    title: "GUARDIANSHIP",
    key: "2",
    children: <QuickLinks info={quickLinks} />,
  },
];

const collapseList = [
  {
    title: "HELLO WORLD",
    description: `Public and private programs and funds can have extremeley long
    waitlists (even those you are......`,
    key: "0",
    children: <QuickLinks info={quickLinks} />,
    hasProgressBar: true
  },
  {
    title: "EDUCATIONAL PRACTICES",
    description: "",
    key: "1",
    children: <QuickLinks info={quickLinks} />,
  },
  {
    title: "GUARDIANSHIP",
    description: "",
    key: "2",
    children: <QuickLinks info={quickLinks} />,
  },
];

export { quickLinks, dashboardInfo, collapseInfo, collapseList };
