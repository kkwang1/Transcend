const selectInfo = [
  {
    title: "All fields",
    options: ["option1", "option2", "option3"],
  },
  {
    title: "All skill levels",
    options: ["option1", "option2", "option3"],
  },
  {
    title: "All program types",
    options: ["option1", "option2", "option3"],
  },
];

const pageInfo = [
  { title: "MyFuture", url: "https://myfuture.com/career" },
  {
    title: "Career One Stop Toolkit",
    url: "https://www.careeronestop.org/Toolkit/Careers/careers.aspx",
  },
  {
    title: "Finding your Career Path",
    url: "https://www.pacer.org/transition/learning-center/employment/finding-career-path.asp",
  },
  {
    title: "Your Career Superstar",
    url: "https://www.understood.org/en/young-adults/career-compass/quiz-find-your-career-superstar?_ul=1*1vagy52*domain_userid*YW1wLTk5b2xabFZnUzMwYXAwX2hNUVFwcXc.",
  },
  {
    title: "Career Examples for Diverse Learners",
    url: "https://www.understood.org/en/young-adults/career-compass/40-career-examples-of-people-who-learn-and-think-differently?_ul=1*1vagy52*domain_userid*YW1wLTk5b2xabFZnUzMwYXAwX2hNUVFwcXc.",
  },
];

const jobPostingInfo = [
  {
    title: "Most Inclusive Workspaces",
    text: "We’ve compiled this list of top-ranked, neuro-diverse, and inclusive workplaces in your area.",
    action: () =>
      window.open(
        "https://www.pathwaysofpa.com/5-great-companies-that-employ-adults-with-special-needs/",
        "_blank"
      ),
  },
  {
    title: "Thorough training included",
    text: "The following businesses offer through training for their first-time employees, so no prior experience is needed.",
    action: () =>
      window.open(
        "https://www.mycil.org/the-best-places-to-work-if-you-have-a-disability/",
        "_blank"
      ),
  },
];

const vocationalTrainingsInfo = [
  {
    title: "12 Steps for Easing the Transition into the Workplace",
    action: () =>
      window.open(
        "https://www.understood.org/en/school-learning/choosing-starting-school/leaving-high-school/12-steps-for-easing-the-transition-to-work",
        "_blank"
      ),
  },
  {
    title: "Employment Stories",
    action: () =>
      window.open(
        "https://www.pacer.org/students/transition-to-life/employment-stories.asp",
        "_blank"
      ),
  },
  {
    title: "Employment Resource Guide",
    action: () =>
      window.open(
        "https://mn.gov/deed/assets/employment-resource-guide_tcm1045-290595.pdf",
        "_blank"
      ),
  },
  {
    title: "PACER Employment resources",
    action: () =>
      window.open(
        "https://www.pacer.org/transition/learning-center/employment/",
        "_blank"
      ),
  },
];

const quickLinks = [
  {
    title: "Find your nearest American Job Center",
    url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers-details.aspx?location=pa&radius=25&ct=0&y=0&w=0&e=0&sortcolumns=Location&sortdirections=ASC&curPage=1&pagesize=100&olds=0&return=1&persist=true&ajax=0&centerID=38911&dist=&locationSelected=",
  },
  {
    title: "PACER Employment resources",
    url: "https://www.pacer.org/transition/learning-center/employment/",
  },
  {
    title: "PA Career Link",
    url: "https://www.pacareerlink.pa.gov/jponline/",
  },
];

export { quickLinks, selectInfo, pageInfo, jobPostingInfo, vocationalTrainingsInfo };
