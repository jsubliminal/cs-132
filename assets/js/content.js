window.SITE = {
  meta: {
    title:
      "Leaving for a Living: Measuring Labor Inequality and Inaccessibility through the impact of Macroeconomic and Regional Factors on the Financial Mobility of OFWs",
    shortTitle: "Leaving for a Living",

    heroLines: ["Leaving for a", "Living:"],
    subtitle:
      "Measuring labor inequality and inaccessibility through the impact of macroeconomic and regional factors on the financial mobility of OFWs",
    brand: "Leaving for a Living",
    groupName: "It's More Fun Outside the Philippines",
    course: "CS132: Introduction to Data Science",
    university: "University of the Philippines Diliman",
    thesis:
      "Who gets to save, and who only sends money home? We use PSA survey microdata to trace how local labor conditions, individual circumstances, and geography shape the financial mobility of Overseas Filipino Workers.",
  },

  images: {
    hero: [],
    questions: null,
  },

  background: {
    title: "Problem Statement & Background",
    lede:
      "In the Philippines, overseas contract employment has fundamentally changed from economic ambitions for upward mobility into an entrenched coping mechanism for millions of households to survive.",

    stats: [
      { value: "2.19M", label: "Overseas Filipino workers in 2024" },
      { value: "97.9%", label: "On short-term contracts (Overseas Contract Workers)" },
      { value: "57.2%", label: "Of the overseas workforce are women" },
      { value: "37.5%", label: "Of cash sent home goes through money transfer services, not banks" },
    ],
    blocks: [
      {
        title: "Pushed out by the local labor market",
        body: [
          "Citizens leave the country every year because the domestic labor market fails to support them. Despite having a positive reported national economic growth, domestic conditions continue to push workers out through limited local job opportunities, wide regional wage gaps, and national underemployment rates ranging from 12.9% to 15.2%. These economic pressures are also geographically uneven: Luzon alone accounts for 62.9% of all outbound workers, heavily concentrated in CALABARZON at 20.5% and Central Luzon at 11.3% (Philippine Statistics Authority [PSA], 2024).",
        ],
      },
      {
        title: "Work abroad is not wealth abroad",
        body: [
          "However, securing overseas employment does not inherently translate into long-term work security, wealth accumulation or sustainable financial security. According to the 2024 Survey on Overseas Filipinos, the overseas workforce reached 2.19 million, with 97.9% bound by short-term contractual arrangements (Overseas Contract Workers) and 57.2% identifying as women (PSA, 2024).",
          "There is a stark difference in the gender roles as 43.6% of all overseas Filipino workers (OFWs) are concentrated in elementary occupations, comprising 68.4% of all female migrant workers compared to only 10.5% of their male counterparts (PSA, 2024). Female domestic and care workers are prone to family ties as they absorb more personal sacrifice and act as the family's financial safety net, leaving them with negligible savings abroad (Yeoh et al., 2020). This constraint is further expressed on the domestic side where remittances are handled as households prioritize necessary consumption, medical expenses, and education rather than for passive investments or business capital (Ang et al., 2009).",
        ],
      },
      {
        title: "Uneven access to financial services",
        body: [
          "There is financial disproportion with how the remittances are brought back to the Philippines as access to financial services is completely uneven across the country. Out of the PhP 214.31 billion in total cash remittances, 61.1% goes through formal banks, while 37.5% still relies on money transfer services (PSA, 2024). Data from the Bangko Sentral ng Pilipinas (BSP) Financial Inclusion reports confirm that physical bank branches are disproportionately centralized in Metro Manila and key urban centers. Families in rural and island provinces often depend on non-bank transfer channels forcing them to pay higher transfer fees and keeping them cut off from formal savings and credit accounts.",
          "We see this as a cycle of financial inaccessibility from local inequalities driving workers abroad, to savings retention overseas, down to the geographic barriers in remittance transactions and it is only necessary to build and formulate policies that protect OFW earnings and create upward financial mobility.",
        ],
      },
      {
        title: "The research gap",
        body: [
          "While remittance is well documented, there is a lack of existing research regarding economic data of migrant workers. Current research fails to bridge the understanding of domestic labor with saving retention abroad and banking transactions locally which prevents them from building personal savings abroad and channeling remittances into sustainable wealth.",
          "In lieu with that, this study makes full use of the microdata from the Philippine Statistics Authority's Survey on Overseas Filipinos to address the research questions below.",
        ],
      },
    ],
    sdgIntro: "This research directly supports two United Nations Sustainable Development Goals (SDGs).",

    sdgs: [
      {
        num: 1,
        short: "No Poverty",
        color: "#E5243B",
        name: "End poverty in all its forms everywhere",
        targets: [
          {
            id: "1.4",
            title: "Equal rights to economic resources and financial services",
            text: "By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance.",
            connection: "Models how overseas income is split between consumption needs abroad, domestic household upkeep, and productive savings or investments.",
            rqs: ["RQ2"],
          },
        ],
        why: "SDG 1 aims to ensure equal rights to economic resources, financial services, and asset building for vulnerable populations. The researchers aim to analyze how migrant capital is split between immediate subsistence consumption versus long-term savings and investments; this project evaluates the structural conditions under which remittances can sustainably build family resilience and break generational poverty.",
      },
      {
        num: 8,
        short: "Decent Work and Economic Growth",
        color: "#A21942",
        name: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
        targets: [
          {
            id: "8.5",
            title: "Fair employment and equal pay",
            text: "By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value.",
            connection: "Examines how domestic wage gaps and underemployment push workers into short-term overseas contracts instead of local work.",
            rqs: ["RQ1"],
          },
          {
            id: "8.10",
            title: "Strengthened domestic financial institutions",
            text: "Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all.",
            connection: "Analyzes the geographic divide between formal banking channels (61.1%) and non-bank money transfer services (37.5%), highlighting unequal financial inclusion across regions.",
            rqs: ["RQ3"],
          },
        ],
        why: "SDG 8 aims to promote productive employment, fair compensation, and expanded access to banking and financial services. The aim of this research is to investigate how domestic wage deficits and underemployment force workers into overseas contracts, while also evaluating how local financial channels can be optimized to safeguard migrant capital.",
      },
    ],
  },

  questions: {
    intro:
      "Three questions, moving from why Filipinos leave, to what they can keep, to how their earnings reach home. Open a card for its hypotheses and objective.",
    sdgs: [
      { num: 1, name: "No Poverty", detail: "target 1.4" },
      { num: 8, name: "Decent Work and Economic Growth", detail: "targets 8.5, 8.10" },
    ],
    items: [
      {
        id: "RQ1",
        label: "Push factors",
        question:
          "What drives OFWs to push towards overseas contractual work and determine initial reasons for migrating abroad given local employment conditions.",
        hypothesis: {
          null: "Pre-departure domestic employment characteristics and regional demographics have no statistical significance on why OFWs migrate to contractual overseas work.",
          alternative: "OFWs once come from lower-wage domestic occupations as well as out of the capital regional inequality which gives statistical significance to migrate for contractual labor.",
        },
        objective: "To identify the different factors that push Filipinos to work abroad in comparison to finding work domestically.",
      },
      {
        id: "RQ2",
        label: "Savings vs. remittance",
        question:
          "What individual characteristics (i.e., gender, marital status, destination country, contract status) of Filipino workers predict their ability to maintain personal savings abroad (C18) in comparison to remitting near 100% of monthly earnings to their family?",
        hypothesis: {
          null: "An individual's demographic characteristics have no statistically significant relationship with an OFW's allocation of monthly income with regards to their personal savings.",
          alternative: "Having a higher level of educational attainment and a secure contract status makes up for positive denominators to maintain personal savings abroad.",
        },
        objective: "To be able to model the determinants of remittance allocation using the following quantifications:",
        objectiveItems: ["Demographic traits", "Human capital", "Contract", "Foreign destination"],
      },
      {
        id: "RQ3",
        label: "Remittance channel",
        question:
          "To what extent does an OFW's regional geographical location predict their chosen remittance transfer mode (i.e., Formal Banks vs. Door to Door vs. OTC)?",
        hypothesis: {
          null: "The choice of remittance transfer is statistically independent of regional location.",
          alternative: "Recipient households in islands and rural areas rely more on remittance transfers of Over-the-Counter (OTC) money transfer or door-to-door carriers compared to urbanized geographical locations.",
        },
        objective: "To classify the primary remittance channel of OFWs by geographical location and socioeconomic status to understand the underlying factors influencing financial banking access.",
      },
    ],
  },

  data: {
    intro:
      "Our data comes from the Philippine Statistics Authority (PSA): the 2024 Survey on Overseas Filipinos, used at the region level throughout.",
    datasets: [
      {
        abbr: "SOF",
        name: "Survey on Overseas Filipinos, PUF 2024",
        publisher: "Philippine Statistics Authority, via PSADA",
        url: "https://psada.psa.gov.ph/catalog/SOF/about?vcode=hZY2",
        facts: [
          ["Observations", "3,931"],
          ["Variables", "44"],
          ["Unit of analysis", "Individual overseas Filipinos"],
          ["Geography", "Philippine regions"],
          ["Reference period", "April to September 2024"],
          ["Access", "Public use file, PSADA registration"],
        ],
        body: [
          "The survey collects information about Filipinos who worked or had worked abroad during the reference period of **April 1 to September 30, 2024**. It was designed to provide information on the demographic and socioeconomic characteristics of overseas Filipinos, including their employment, destination countries, income, migration history, and remittances.",
          "The SOF was conducted as a **rider survey to the October 2024 Labor Force Survey (LFS)**, meaning that it used the household sample selected for the LFS. The survey covers overseas Filipinos in private households and is designed to produce estimates at the national and regional levels.",
          "We chose it because it is the only public microdata that links an OFW's demographic profile, contract, and income to the remittances their household actually receives.",
          "The full dataset, variable dictionary, and value sets are in our [Google Sheet](https://docs.google.com/spreadsheets/d/1SyQFrcPC2vEwx7h2z4060tF8bhLo3QQHVNgpV4FvUtc/edit#gid=782984696).",
        ],
      },
    ],

    details: [
      {
        title: "Data Collection Process",
        body: [
          "Data collection took place from **October 8 to October 31, 2024**. The PSA collected the data through **face-to-face (F2F) interviews** with sampled households. The SOF questionnaire was administered to households identified through the Labor Force Survey as having a family member who met the survey's eligibility criteria. Responses were recorded on the **SOF I form**.",
          "The questionnaire collected information about each eligible overseas Filipino's demographic characteristics, migration history, employment and occupation, country of destination, income, and remittances. The questionnaire also included information about whether the overseas Filipino had returned to the Philippines and whether they brought home cash or goods.",
          "After collection, the PSA performed multiple stages of data processing and quality control, including editing, validation, completeness checks, manual verification, and the application of survey weights. The resulting data were anonymized and released as a **Public Use File (PUF)**.",
        ],
      },
      {
        title: "Sampling Method",
        body: [
          "The SOF used the **2023 Geo-enabled Master Sample (GeoMS)** used by the PSA for household surveys. The sampling design uses a **two-stage systematic sampling approach**.",
          "In the first stage, geographic areas called **Primary Sampling Units (PSUs)** were selected from the sampling frame. In the second stage, **housing units** were selected within those PSUs. The households living in the selected housing units were then included in the Labor Force Survey sample. The SOF was administered to sampled households that had an eligible overseas Filipino member.",
          "This sampling approach allows the PSA to obtain a sample distributed across the Philippines rather than collecting data from only a few locations. The survey was designed to provide estimates at both the **national and regional levels**. Survey weights were applied during estimation to account for the sampling design and allow the sample to be used to estimate characteristics of the larger population.",
        ],
      },
      {
        title: "Dataset Size and Structure",
        body: [
          "The Public Use File used in our project contains **3,931 observations** and **44 variables**. The unit of analysis is the individual overseas Filipino, and geographic coverage is by Philippine region. The reference period is April to September 2024 for the OFW population, with some questions covering October 2019 to September 2024.",
          "The PSA's data archive confirms that the released SOF PUF contains 3,931 cases and 44 variables and includes demographic, occupation, destination, income, remittance, and weighting information. The variables can be grouped into several categories:",
        ],
        groups: [
          { title: "Demographic", items: ["Sex", "Age", "Marital status", "Highest grade completed", "Relationship to household"] },
          { title: "Migration", items: ["Number of times the person left the Philippines", "Date of last departure", "Country of destination", "Intended length of stay", "Whether the person returned to the Philippines"] },
          { title: "Employment", items: ["Whether the person worked abroad", "Occupation", "Industry", "Land-based or sea-based work", "Average monthly income", "Number of months worked"] },
          { title: "Remittance", items: ["Whether cash remittances were received", "Total cash remittances", "Method used to send remittances", "Allocation of remittances toward consumption, investment, savings, gifts, and other uses", "Cash and goods brought or sent home"] },
        ],
      },
      {
        title: "Preprocessing",
        body: [
          "The PSA performed substantial preprocessing before releasing the Public Use File. The original survey responses underwent editing and validation at the PSA provincial offices, including automated and manual checks for completeness and consistency. Variables were also coded and recoded for the public-use dataset, and identifying information was anonymized.",
          "For our project, we performed additional preprocessing to prepare the dataset for analysis. This included examining the variables and their data types, checking for missing or invalid values, identifying variables relevant to our research question, and handling survey-specific missing values and skip patterns where necessary.",
          "An important consideration is that some variables are only applicable to certain respondents because of the questionnaire's skip logic. For example, questions about employment characteristics are only applicable to respondents who reported working or having a job/business abroad. Therefore, missing values in these variables do not necessarily represent errors or missing responses; they can indicate that the question was not applicable to that respondent.",
        ],
      },
      {
        title: "Additional Information",
        body: [
          "This is the most recent SOF public use file available. The PSA's processing takes about 14 months: the 2024 round, collected in October 2024, was released on December 16, 2025 ([PSA](https://psa.gov.ph/statistics/survey/labor-and-employment/survey-overseas-filipinos)).",
          "The next round, the 2026 SOF, is being collected from October 8 to 31, 2026, with results scheduled for press release on April 30, 2027 and special release on June 30, 2027 ([PSA](https://psa.gov.ph/content/psa-clears-2026-survey-overseas-filipinos-encourages-participation-empower-overseas)).",
        ],
      },
    ],

    constraints: [
      {
        title: "A household survey",
        body: "Because the SOF is a **household survey**, the dataset does not represent every Filipino living or working abroad. Its population is based on eligible overseas Filipinos associated with sampled private households in the Philippines. The data also relies partly on information reported by household members about overseas relatives, so some responses may be based on a proxy respondent rather than the overseas Filipino directly.",
      },
      {
        title: "Just Samples!",
        body: "The 3,931 observations in the Public Use File are **sample observations and should not be interpreted as the actual number of overseas Filipinos**. The PSA applies survey weights when producing population-level estimates from the sample, so the dataset needs to be analyzed with the sampling design and weights in mind when making population-level conclusions.",
      },
      {
        title: "Geography stops at the region",
        body: "The SOF public file only identifies the region (`RREG`), so RQ3 compares the 17 regions rather than individual provinces or cities. The 2020 urban/rural indicator `RURB2020` adds an urban vs. rural split within each region.",
      },
      {
        title: "Just A Humble Sample!!",
        body: "SOF 2024 has 3,931 cases. Subgroup comparisons (for example, a single region by contract type) can get thin, so we report uncertainty and avoid strong claims where cells are small.",
      },
    ],
  },

  findings: {
    intro:
      "Results are added here as each analysis is completed. Sections marked in progress are placeholders.",
    items: [
      {
        rq: "RQ1",
        title: "Why Filipinos leave",
        summary: "",
        sheet: null,
        charts: [],
      },
      {
        rq: "RQ2",
        title: "Who manages to save",
        summary: "",
        sheet: null,
        charts: [],
      },
      {
        rq: "RQ3",
        title: "How money reaches home",
        summary: "",
        sheet: null,
        charts: [],
      },
    ],
  },

  sheets: [
    { label: "CS 132 Project Group 4", note: "Our full spreadsheet: data, dictionary, and value sets", url: "https://docs.google.com/spreadsheets/d/1SyQFrcPC2vEwx7h2z4060tF8bhLo3QQHVNgpV4FvUtc/edit?usp=sharing" },
    { label: "SOF PUF 2024", note: "The full public use file: 3,931 records, 44 variables", url: "https://docs.google.com/spreadsheets/d/1SyQFrcPC2vEwx7h2z4060tF8bhLo3QQHVNgpV4FvUtc/edit#gid=782984696" },
    { label: "Variable Dictionary", note: "Each variable we use, its level of measurement, and its preprocessing action", url: "https://docs.google.com/spreadsheets/d/1SyQFrcPC2vEwx7h2z4060tF8bhLo3QQHVNgpV4FvUtc/edit#gid=798966768" },
    { label: "SOF 2024 dictionary", note: "PSA's variable documentation for the public use file", url: "https://docs.google.com/spreadsheets/d/1SyQFrcPC2vEwx7h2z4060tF8bhLo3QQHVNgpV4FvUtc/edit#gid=133207239" },
    { label: "SOF 2024 value sets", note: "Code-to-label mappings for categorical variables", url: "https://docs.google.com/spreadsheets/d/1SyQFrcPC2vEwx7h2z4060tF8bhLo3QQHVNgpV4FvUtc/edit#gid=1090691692" },
  ],

  methodology: {
    intro:
      "A short account of how the data is prepared, so that every number on this page can be traced back to a variable.",
    steps: [
      {
        title: "Variables",
        body: "Analysis uses the variable names exactly as they appear in the SOF 2024 DDI documentation. The key ones are listed in the table below.",
      },
      {
        title: "Weighting",
        body: "Every population-level estimate (shares, means, totals) is weighted by the sample weight `RSWGT`. Unweighted counts are reported only to show sample sizes.",
      },
      {
        title: "Geography",
        body: "Region comes from `RREG` (17 administrative regions, coded within a 1 to 19 range). Urban vs. rural comes from `RURB2020`. No finer geography is available in the public file.",
      },
      {
        title: "A note on naming",
        body: "Our proposal informally refers to personal savings as \"C18\". The actual SOF variable is `RQ273P_SAVINGS`, the percentage of the remittance spent on savings. This site uses the real variable name throughout.",
      },
    ],
    variables: [
      { name: "RREG", label: "Region", use: "RQ3" },
      { name: "RURB2020", label: "2020 urban/rural indicator", use: "RQ3" },
      { name: "RHHNUM", label: "Household number", use: "Record identifier" },
      { name: "RQ1_LNO", label: "Demographic, departure, and occupation block", use: "RQ1, RQ2" },
      { name: "RQ17_AVEMINC", label: "Average monthly income", use: "RQ2" },
      { name: "RQ24_CASHREM", label: "Whether cash remittance was received", use: "RQ2, RQ3" },
      { name: "RQ25_CASHAMT", label: "Cash remittance amount", use: "RQ2" },
      { name: "RQ26_MODE", label: "Mode of remittance (bank, door-to-door, OTC, ...)", use: "RQ3 outcome" },
      { name: "RQ273P_SAVINGS", label: "% of remittance spent on savings", use: "RQ2 outcome" },
      { name: "RSWGT", label: "Sample weight", use: "All estimates" },
      { name: "RSVYYR", label: "Survey year", use: "Pooling rounds" },
    ],
  },

  team: {
    members: [
      { name: "Jesua Alfaro", role: "" },
      { name: "Reuter Camacho", role: "" },
      { name: "Alphonso Carandang", role: "" },
      { name: "Alexis Geronimo", role: "" },
    ],
  },

  references: [
    "Ang, A., Jha, S., & Sugiyarto, G. (2009). Remittances and household behavior in the Philippines. *SSRN Electronic Journal*. [https://doi.org/10.2139/ssrn.1618125](https://doi.org/10.2139/ssrn.1618125)",
    "Philippine Statistics Authority. (2025). *Results of the 2024 Survey on Overseas Filipinos (SOF)*.",
    "United Nations. (2015). *Transforming our world: The 2030 Agenda for Sustainable Development* (Targets 1.4, 8.5, 8.10).",
    "Yeoh, B. S. A., Somaiah, B. C., Lam, T., & Acedera, K. F. (2020). Doing family in \u201ctimes of migration\u201d: Care temporalities and gender politics in Southeast Asia. *Annals of the American Association of Geographers, 110*(6), 1709\u20131725. [https://doi.org/10.1080/24694452.2020.1723397](https://doi.org/10.1080/24694452.2020.1723397)",
  ],

  sources: [
    {
      label: "Survey on Overseas Filipinos, PUF 2024",
      publisher: "PSA Data Archive (PSADA)",
      url: "https://psada.psa.gov.ph/catalog/SOF/about?vcode=hZY2",
    },
    {
      label: "OFW Statistical Compendium (aggregate tables, cited for context only)",
      publisher: "Department of Migrant Workers",
      url: "https://dmw.gov.ph/statistics/compendium",
    },
  ],
};
