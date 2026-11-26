import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpLeft } from "lucide-react"
import LoyaltyApp from "@/components/loyalty-app"
import styles from "./prototype.module.css"

export const metadata: Metadata = {
  title: "Prototipo interactivo | Fydel",
  description: "Explorá la experiencia de fidelización de Fydel: Coins, pedidos, regalos y beneficios. Demostración con datos simulados.",
}

export default function PrototypePage() {
  return <><Link href="/" className={styles.back}><ArrowUpLeft size={15} /> Volver a Fydel</Link><LoyaltyApp /></>
}
