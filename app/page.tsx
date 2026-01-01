import Link from "next/link";
import { Navbar } from "@/components/lander/navbar";
import { Hero } from "@/components/lander/hero";
import { Features } from "@/components/lander/features";
import { MultiBrainSection } from "@/components/lander/multibrainsection";
import { MarketMoodSection } from "@/components/lander/marketmoodsection";
import { JournalLearningSection } from "@/components/lander/journallearningsection";
import { PsychologyGuardSection } from "@/components/lander/psychologyguardsection";
import { RiskAssistantSection } from "@/components/lander/riskassistantsection";
import { Footer } from "@/components/lander/footer";
import { BehavioralGuard } from "@/components/lander/goodto/behavioralguard";
import { IntelligentJournal } from "@/components/lander/goodto/intelligentjournal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RiskShield } from "@/components/lander/goodto/riskshield";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-brand-cyan/30 selection:text-brand-cyan overflow-hidden ">
            <Navbar />
            <Hero />
            <Features />
            <MultiBrainSection />
            <MarketMoodSection />
            {/* <JournalLearningSection /> */}
            <IntelligentJournal />
            <PsychologyGuardSection />
            {/* <RiskAssistantSection /> */}
            <RiskShield />
            <BehavioralGuard />

            {/* Final CTA */}
            <section className="py-24 lg:py-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-cyan/5 blur-3xl rounded-full scale-150 translate-y-1/2" />
                <div className="relative z-10 mx-auto max-w-[90%] lg:max-w-6xl px-4 text-center">
                    <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
                        Trade Smarter, <br />
                        <span className="text-zinc-500">Not Harder.</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto mb-12 text-lg">
                        Leverage AI-powered insights to understand the market with unprecedented clarity.
                        Make informed decisions backed by neural analysis, not human error.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/login">
                            <Button size="lg" className="h-16 px-12 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 w-full sm:w-auto">
                                Get Started Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button size="lg" variant="ghost" className="h-16 px-10 text-zinc-400 hover:text-white w-full sm:w-auto">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
