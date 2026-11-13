# Rostercraft test book

Preconditions: the site is running (`npm run dev`). Estimator cases start on the home page, pricing cases on `/pricing`, trial form cases on `/trial`. Unless a case says otherwise, `VITE_TRIAL_DAYS` is 14. Expected results are computed by hand from the user stories in the README, not from the code.

| Id | Story | Input | Expected result |
| --- | --- | --- | --- |
| TC-01 | 1. Time estimator | 1 employee | 0.8 hours saved per month |
| TC-02 | 1. Time estimator | 10 employees | 8 hours saved per month |
| TC-03 | 1. Time estimator | 7 employees | 5.6 hours saved per month |
| TC-04 | 1. Time estimator | 13 employees | 10.4 hours saved per month |
| TC-05 | 1. Time estimator | 500 employees | 400 hours saved per month |
| TC-06 | 1. Time estimator | Field empty | "Enter a number of employees between 1 and 500." and no result |
| TC-07 | 1. Time estimator | 0 employees | Same message, no result |
| TC-08 | 1. Time estimator | -5 employees | Same message, no result |
| TC-09 | 1. Time estimator | 501 employees | Same message, no result |
| TC-10 | 2. Pricing | 1 location, monthly | €29.00 per month |
| TC-11 | 2. Pricing | 10 locations, monthly | €290.00 per month |
| TC-12 | 2. Pricing | 11 locations, monthly | €314.00 per month |
| TC-13 | 2. Pricing | 12 locations, monthly | €338.00 per month |
| TC-14 | 2. Pricing | 50 locations, monthly | €1250.00 per month |
| TC-15 | 2. Pricing | 1 location, annual | €23.20 per month, billed €278.40 per year |
| TC-16 | 2. Pricing | 10 locations, annual | €232.00 per month, billed €2784.00 per year |
| TC-17 | 2. Pricing | 11 locations, annual | €251.20 per month, billed €3014.40 per year |
| TC-18 | 2. Pricing | 12 locations, annual | €270.40 per month, billed €3244.80 per year |
| TC-19 | 2. Pricing | 50 locations, annual | €1000.00 per month, billed €12000.00 per year |
| TC-20 | 2. Pricing | 51 locations, monthly | "More than 50 locations? Contact sales." and no price |
| TC-21 | 2. Pricing | 51 locations, annual | Same message, no price |
| TC-22 | 3. Trial form | Anna Petit, anna@bistro-lune.fr, 1 | Thank-you page: "Thanks Anna, your 14-day free trial is ready." |
| TC-23 | 3. Trial form | Anna Petit, anna@bistro-lune.fr, 2 to 5 | Same thank-you page |
| TC-24 | 3. Trial form | Empty name, anna@bistro-lune.fr, 1 | "Enter your full name." next to the name, nothing sent |
| TC-25 | 3. Trial form | "A", anna@bistro-lune.fr, 1 | "Enter your full name." next to the name, nothing sent |
| TC-26 | 3. Trial form | "Al", anna@bistro-lune.fr, 1 | No error, thank-you page: "Thanks Al, ..." |
| TC-27 | 3. Trial form | Anna Petit, empty email, 1 | "Enter a valid work email." next to the email, nothing sent |
| TC-28 | 3. Trial form | Anna Petit, anna, 1 | "Enter a valid work email." next to the email |
| TC-29 | 3. Trial form | Anna Petit, anna@, 1 | "Enter a valid work email." next to the email |
| TC-30 | 3. Trial form | Anna Petit, anna@bistro, 1 | "Enter a valid work email." next to the email (no extension) |
| TC-31 | 3. Trial form | Anna Petit, anna@bistro-lune., 1 | "Enter a valid work email." next to the email |
| TC-32 | 3. Trial form | Anna Petit, anna@bistro-lune.fr, no number of locations | "Choose a number of locations." next to the field, nothing sent |
| TC-33 | 3. Trial form | Empty form | The three errors, each next to its field, nothing sent |
| TC-34 | 3. Trial form | "  Anna Petit " with spaces, anna@bistro-lune.fr, 1 | Thank-you page: "Thanks Anna, ..." |
| TC-35 | 3. Trial form | Submit with errors, fix them, submit again | Errors disappear and the thank-you page appears |
| TC-36 | 4. Trial length | `VITE_TRIAL_DAYS=7`, valid form | "Thanks Anna, your 7-day free trial is ready." |
| TC-37 | 4. Trial length | `VITE_TRIAL_DAYS=30`, valid form | "Thanks Anna, your 30-day free trial is ready." |
| TC-38 | 4. Trial length | `VITE_TRIAL_DAYS=21`, valid form | "Thanks Anna, your 21-day free trial is ready." |
| TC-39 | 4. Trial length | `VITE_TRIAL_DAYS` missing, valid form | "Thanks Anna, your 14-day free trial is ready." |
| TC-40 | 4. Trial length | `VITE_TRIAL_DAYS=6`, valid form | 14-day trial |
| TC-41 | 4. Trial length | `VITE_TRIAL_DAYS=31`, valid form | 14-day trial |
| TC-42 | 4. Trial length | `VITE_TRIAL_DAYS=abc`, valid form | 14-day trial |
| TC-43 | 4. Trial length | `VITE_TRIAL_DAYS` empty, valid form | 14-day trial |
| TC-44 | 5. On a phone | Home page at 375 pixels wide | No sideways scrolling; navigation and trial button reachable |
| TC-45 | 5. On a phone | `/pricing` at 375 pixels wide, plan table visible | No page-level sideways scrolling; calculator and billing choice reachable |
| TC-46 | 5. On a phone | `/trial` at 375 pixels wide | No sideways scrolling; every field and the submit button reachable |
| TC-47 | 5. On a phone | Confirmation page after a valid trial form at 375 pixels | No sideways scrolling |

## Campaign

Not run yet. Record each result below.

| Id | Obtained result | Status |
| --- | --- | --- |
