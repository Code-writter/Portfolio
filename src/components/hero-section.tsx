import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
// import { LogoCloud } from './logo-cloud'

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
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
                <section>
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-5xl font-medium md:text-6xl">
                                Welcome to my Portfolio
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                                Passionate about developing intelligent systems and cloud-native applications
                            </TextEffect>

                            <AnimatedGroup
                            //@ts-ignore
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
                                className="mt-12">
                                    <div>
                                        <Button>Learn More About Me</Button>
                                    </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

// const AppComponent = () => {
//     return (
//         <div className="relative h-80 w-64 overflow-hidden rounded-2xl  shadow-xl">
//             {/* Decorative elements */}
//             <div className="absolute inset-0 rounded-2xl "></div>
            
//             {/* Image with transparent background */}
//             <div className="relative h-full w-full overflow-hidden rounded-2xl flex items-center justify-center">
//                 <Image
//                     src="/pic-removebg-preview.png"
//                     alt="Abhishek Tiwari"
//                     width={320}
//                     height={400}
//                     className="object-contain object-center"
//                     priority
//                     quality={100}
//                 />
//             </div>
            
//             {/* Decorative elements */}
//             <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl"></div>
//             <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-purple-400/20 blur-3xl"></div>
//         </div>
//     )
// }
