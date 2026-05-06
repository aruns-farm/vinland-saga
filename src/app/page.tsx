import { redirect } from "next/navigation"

/* Root of ketils.farm — redirect to the landing or show farm listing */
export default function RootPage() {
  /* When accessed without a character subdomain, show a welcome page */
  redirect("/sites/arun")
}
