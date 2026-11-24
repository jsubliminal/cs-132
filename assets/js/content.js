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
          alternative: "OFWs come disproportionately from lower-wage domestic occupations and from outside the capital region, which gives statistical significance to migrating for contractual labor.",
        },
        objective: "To identify the different factors that push Filipinos to work abroad in comparison to finding work domestically.",
      },
      {
        id: "RQ2",
        label: "Savings vs. remittance",
        question:
          "What individual characteristics (i.e., gender, marital status, destination country, contract status) of Filipino workers predict their ability to maintain personal savings abroad (C18) in comparison to remitting near 100% of monthly earnings to their family?",
        hypothesis: {
          null: "An individual's demographic characteristics have no statistically significant relationship with their family's allocation of remittances into savings.",
          alternative: "Having a higher level of educational attainment and a secure contract status make it more likely that an OFW's family allocates more remittances to savings in comparison to other spending categories.",
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
          null: "The choice of remittance transfer mode is statistically independent of regional location.",
          alternative: "Recipient households in island and rural areas rely more on OTC or door-to-door transfer compared to urbanized locations.",
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
      "One chart per research question from our analysis notebook, the hypothesis test results, and the whole story on one map.",
    items: [
      {
        rq: "RQ1",
        title: "Why Filipinos leave",
        summary:
          "**H0 is rejected, and hypothesis testing partially supports H1.** Pre-departure occupation is the dominant factor separating contract OFWs from non-contract workers (F(9) = 303.82, p < 0.001, V = 0.336), while coming from outside NCR exerts a statistically significant but smaller independent regional effect (F(1) = 8.30, p = 0.004, crude V = 0.097). Although it is unclear whether most contractual OFWs had specifically lower-wage domestic occupations, there are significant differences in the percentages of contractual OFWs who had specific occupations (e.g., elementary) compared with others (e.g., managers and professionals).",
        test: {
          method:
            "Contract-OFW status (`RQ10_REASON` = 1) among people already represented in the overseas-Filipino survey, compared across usual occupation and NCR/outside-NCR household origin. Both are genuinely pre-departure per the questionnaire (C9 occupation \"before he/she (last) left\"), but the file still does not include non-migrants or domestic wages; occupation is only a prior-work proxy and region is only a rough inequality proxy, so this tests association among surveyed OFWs rather than a true push-factor model.",
          stats: [
            "Occupation, adjusted for NCR/outside NCR: household-cluster robust linear probability model, Wald F(9) = 303.82, p < 0.001, N = 3,931; crude Cramer's V = 0.336.",
            "NCR vs outside NCR, adjusted for occupation: household-cluster robust Wald F(1) = 8.30, p = 0.004; crude Cramer's V = 0.097.",
          ],
        },
        sheet: null,
        charts: [
          {
            type: "image",
            src: "assets/img/h1_contract_status.png",
            alt: "Bar charts of the weighted share of contract OFWs by prior occupation, from about 97% for elementary occupations down to 40% for managers, and by household region, about 67% for NCR against 82% outside NCR.",
            caption: "Weighted share of OFWs on a contract, by job held before leaving and by household region.",
          },
        ],
      },
      {
        rq: "RQ2",
        title: "Who manages to save",
        summary:
          "**H0 is rejected and H1 is not supported.** Contract status and prior educational attainment level do not correlate with families saving more money, but other demographic variables do. There is no significance of an OFW's family saving and their contract status (Wald F(1) = 0.78, p = 0.378; crude Cramer's V = 0.007). There is little significance of an OFW's family saving and their prior completed education level (Wald F(3) = 5.23, p = 0.156; crude Cramer's V = 0.098) as well as their destination region (Wald F(7) = 10.02, p = 0.187; crude Cramer's V = 0.116). However, marital status (Wald F(2) = 38.37, p < 0.001; crude Cramer's V = 0.153) and sex (Wald F(1) = 34.79, p < 0.001, N = 2,655; crude Cramer's V = 0.180) of an OFW are highly significant to whether the family contributes remittances to their savings.",
        test: {
          method:
            "Comparing if remittance is allocated to savings by the receiving family (`RQ273P_SAVINGS` > 0, any_savings, from C27) versus all of it going to consumption or gifts. This is tested against different OFW demographics, such as sex, marital status, destination country (grouped into regions), contract status, and highest attained education, with household-clustered robust standard errors.",
          stats: [
            "Sex, adjusted for marital status, destination, and contract: Wald F(1) = 34.79, p < 0.001, N = 2,655; crude Cramer's V = 0.180.",
            "Marital status, adjusted for the above: Wald F(2) = 38.37, p < 0.001; crude Cramer's V = 0.153.",
            "Destination region, adjusted for the above: Wald F(7) = 10.02, p = 0.187; crude Cramer's V = 0.116.",
            "Contract status, adjusted for the above: Wald F(1) = 0.78, p = 0.378; crude Cramer's V = 0.007.",
            "Education, adjusted for the above: Wald F(3) = 5.23, p = 0.156; crude Cramer's V = 0.098.",
          ],
        },
        sheet: null,
        charts: [
          {
            type: "image",
            src: "assets/img/h2_savings_allocation.png",
            alt: "Bar charts of the weighted mean share of remittances saved: about 15% for married, 11% for single and 8% for previously married OFWs, and from under 3% to about 19% across destination regions, highest for Europe and Australia.",
            caption: "Weighted mean share of remittances set aside as savings, by marital status and by destination region.",
          },
        ],
      },
      {
        rq: "RQ3",
        title: "How money reaches home",
        summary:
          "**H0 rejected, and H1 is accepted.** When only comparing remittance transfer modes between whether the destination is urban or rural, there is a significant difference (Wald chi-square(2) = 59.16, p < 0.001), where utilizing Formal Banks is more prevalent in OFWs sending back to urban areas than rural areas. There is greater significance when specifying by island group (Wald chi-square(6) = 607.59, p < 0.001), with people sending remittances back to NCR via Formal Banks the most. When combining the two categories, it is proven that household geography is overwhelmingly significant (Wald chi-square(8) = 1687.00, p < 0.001; urban/rural crude Cramer's V = 0.184 and island group crude Cramer's V = 0.187).",
        test: {
          method:
            "`RQ26_MODE` is recoded into three channels matching the hypothesis: Formal Bank, Door-to-door, and OTC (agency/local office, friends/co-workers, money-transfer services, and other modes). Geography available is household region (island group) and urban/rural classification, not province. Door-to-door has only 3 observations, so any door-to-door-specific conclusion is not reliable.",
          stats: [
            "Urban/rural terms: household-cluster robust multinomial Wald chi-square(2) = 59.16, p < 0.001.",
            "Island-group terms: household-cluster robust multinomial Wald chi-square(6) = 607.59, p < 0.001.",
            "All location terms jointly: Wald chi-square(8) = 1687.00, p < 0.001; crude Cramer's V = 0.184 for urban/rural and 0.187 for island group.",
          ],
        },
        sheet: null,
        charts: [
          {
            type: "image",
            src: "assets/img/h3_mode_by_location.png",
            alt: "Stacked bar charts of remittance mode: formal banks are used by about 53% of urban and 35% of rural households, and by about 63% in NCR, 59% in the Visayas, 40% in Luzon and 27% in Mindanao, with over-the-counter services making up the rest.",
            caption: "Share of households by reported remittance mode, by urban or rural location and by island group.",
          },
        ],
      },
    ],
    results: {
      title: "Hypothesis test results",
      intro:
        "Survey-weighted logistic regressions, each factor tested while holding the others constant. Cramer's V gives the effect size from an unweighted chi-square test.",
      rows: [
        ["H1", "Prior occupation", 3931, "303.82", 9, "< 0.001", "0.34", "Reject H0", "Plant and machine operators: 98% on a contract vs 66% for Professionals"],
        ["H1", "NCR vs outside NCR", 3931, "8.30", 1, "0.004", "0.10", "Reject H0", "Outside NCR: 84% on a contract vs 77% for NCR"],
        ["H2", "Sex", 2655, "34.79", 1, "< 0.001", "0.18", "Reject H0", "Female: 44% save vs 56% for Male"],
        ["H2", "Marital status", 2655, "38.37", 2, "< 0.001", "0.15", "Reject H0", "Married: 53% save vs 41% for Single"],
        ["H2", "Education", 2655, "5.23", 3, "0.156", "0.10", "Fail to reject H0", "No clear difference once the other factors are held constant"],
        ["H2", "Destination region", 2655, "10.02", 7, "0.187", "0.12", "Fail to reject H0", "No clear difference once the other factors are held constant"],
        ["H2", "Contract status", 2655, "0.78", 1, "0.378", "0.01", "Fail to reject H0", "No clear difference once the other factors are held constant"],
        ["H3", "Urban vs rural", 2702, "61.22", 1, "< 0.001", "0.18", "Reject H0", "Rural: 65% use non-bank vs 48% for Urban"],
        ["H3", "Island group", 2702, "157.93", 3, "< 0.001", "0.26", "Reject H0", "Mindanao: 73% use non-bank vs 45% for NCR"],
      ],
    },
    nutshell: {
      title: "Across Philippine Regions, How OFWs Work and Remit",
      src: "assets/nutshell/index.html",
      caption: [
        "How did overseas Filipinos work, send money home, and help their families save in 2024? The map colors show how often banks were used to send money home. Taller gold bars show that families set aside a larger share of the money they received. The percentage beside each labeled region shows how many surveyed overseas Filipinos from that region left as contract workers.",
        "Contract work varied by previous job and home region. Whether families saved any of the money they received was linked to the worker's sex and marital status. After accounting for other factors, the analysis found no clear link with education or contract status. How families received money also varied by island group and between urban and rural areas. The savings figures describe what families in the Philippines set aside.",
      ],
    },
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
      {
        name: "Jesua Alfaro",
        role: "",
        bio: [
          "¡Hola! I'm Jesua James C. Alfaro, a third-year Computer Science student at the University of the Philippines Diliman who loves both art and technology. I'm active in the UP Association of Computer Science Majors and UP Advertising Core. Serving as a senior art director there has taught me a lot about leadership, project management, and working with people from many different backgrounds.",
          "Outside school, I love film and the arts. They inspire a lot of the technical work I do, and I see that as proof that STEM and the arts can work together. I'm also into books, music, and learning languages (¡estoy aprendiendo español ahora mismo!). I play four instruments, I'm in a band, and I try to read at least one book a month, even with a busy schedule.",
        ],
        email: "jesuajamesalfaro655@gmail.com",
        linkedin: "https://www.linkedin.com/in/jesua-alfaro/",
        github: "https://github.com/jsubliminal",
      },
      {
        name: "Reuter Camacho",
        role: "",
        bio: [
          "Hello! I am Reuter Jan F. Camacho, a Computer Science student at the University of the Philippines Diliman with a strong interest in algorithms, software engineering, artificial intelligence, and computational problem-solving. I have participated in competitions such as NOI.PH and the ICPC Asia Manila Regionals. I am also a participant in the International Collegiate Artificial Intelligence Contest (ICAIC).",
          "Outside of academics, my interest in algorithms and problem-solving has always extended into my hobbies. Whether it's solving a Rubik's Cube, playing chess, or strategizing in card games like Yu-Gi-Oh!, I've always enjoyed activities that involve pattern recognition, planning, and thinking several steps ahead. I guess I've always found fun in problems that require a little strategy!",
        ],
        email: "rjfc123.mny@gmail.com",
        linkedin: "https://www.linkedin.com/in/reuter-jan-camacho",
        github: "https://github.com/chry607",
      },
      {
        name: "Alphonso Carandang",
        role: "",
        bio: [
          "Hello! I am Alphonso Clarence C. Carandang, a third-year Computer Science student at the University of the Philippines Diliman with an interest in bridging technology, business, and finance. Beyond academics, I am actively involved in UP CURSOR and UP JFA, where I have developed an appreciation for leadership, project management, and working with people from different backgrounds.",
          "Outside of technology, I grew interested in human resources and I enjoy exploring different creative outlets, from photography to meditation to music mixing. Recently, I've been experimenting with DJing and origami as ways to discover new ways to express my creativity. The interesting learning experiences happen outside our own fields of study.",
        ],
        email: "lance322006@gmail.com",
        linkedin: "https://www.linkedin.com/in/alphonso-clarence-carandang",
        github: "https://github.com/AgentCheems",
      },
      {
        name: "Alexis Geronimo",
        role: "",
        bio: [
          "Hello! I am Alexis, and I am a 4th-year student studying Computer Science as an exchange student at the University of the Philippines Diliman, originally from Rutgers University New Brunswick. I am interested in Machine Learning and Data Science and have experience using large datasets to make predictions in the fields of consumer care and the food and service industries.",
          "Outside of technology, I am interested in language learning, arts & crafts, and performing music. If you catch me not working, you'll find me catching up on my daily Anki vocabulary deck, crafting a gift for the next nearest birthday, or rehearsing with my band for our next gig!",
        ],
        email: "alexispgeronimo@gmail.com",
        linkedin: "https://www.linkedin.com/in/alexisgeronimo",
        github: "https://github.com/alxxis",
      },
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
