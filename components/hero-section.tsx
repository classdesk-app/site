import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-36">

                        <div className="mx-auto max-w-10xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="/roadmap"
                                        className="hover:bg-gray-100 dark:hover:bg-white/10 bg-white dark:bg-white/5 group mx-auto flex w-fit items-center gap-4 rounded-full border border-gray-200 dark:border-white/20 p-1 pl-4 backdrop-blur-sm transition-colors duration-300 shadow-sm dark:shadow-none">
                                        <span className="text-gray-900 dark:text-white text-sm">✨ Beta Launch Q4 2025</span>
                                        <span className="block h-4 w-0.5 border-l border-gray-300 dark:border-white/30"></span>

                                        <div className="bg-gray-100 dark:bg-white/10 group-hover:bg-gray-200 dark:group-hover:bg-white/20 size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-gray-900 dark:text-white" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-gray-900 dark:text-white" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-8 max-w-4xl text-balance text-3xl max-md:font-semibold md:text-5xl lg:mt-12 xl:text-6xl text-gray-900 dark:text-white">
                                    All-in-One Platform for Affiliated Colleges and Universities
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-600 dark:text-white/70">
                                    Accelerate NAAC & NBA readiness—centralize attendance, marksheets, and sessions with automated reporting.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-white/10 rounded-[calc(var(--radius-xl)+0.125rem)] border border-white/20 p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <a href="#waitlist">
                                                <span className="text-nowrap">Join Waitlist</span>
                                            </a>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white">
                                        <Link href="/roadmap">
                                            <span className="text-nowrap">View Roadmap</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-white/5 backdrop-blur-md p-4 shadow-xl dark:shadow-none">
                                    {/* Dashboard Preview Placeholder */}
                                    <div className="aspect-[15/8] relative rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-500/20 dark:to-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-gray-200 dark:border-white/10">
                                        <div className="text-center p-8">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 mb-4">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dashboard Preview</h3>
                                            <p className="text-gray-600 dark:text-white/60">Real-time analytics for college management</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="pb-16 pt-16 md:pb-32">
                    <div className="relative m-auto max-w-5xl px-6">
                        <p className="text-center text-sm text-gray-600 dark:text-white/60 mb-8">
                            Empowering colleges and universities across India
                        </p>
                        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
                            <div className="flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Free</p>
                                    <p className="text-sm text-gray-600 dark:text-white/60">Onboarding Process</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10hrs</p>
                                    <p className="text-sm text-gray-600 dark:text-white/60">Time Saved/Week</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">99.9%</p>
                                    <p className="text-sm text-gray-600 dark:text-white/60">Accuracy Rate</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">24/7</p>
                                    <p className="text-sm text-gray-600 dark:text-white/60">Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
