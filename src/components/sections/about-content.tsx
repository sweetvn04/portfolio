"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config'


export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">

        <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
          <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background rounded-lg">
            <Image
              src={siteConfig.author_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full "
              priority
            />
            {/* SaaS-style background effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
            </div>
          </div>
          <div className="text-center text-3xl font-extrabold text-primary mt-4">{siteConfig.author}</div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">
            Hi, I&apos;m <strong>{siteConfig.author}</strong>—a Computer Science student and aspiring System Architect dedicated to building robust, scalable infrastructure. With a diverse background ranging from <strong>Computer Vision (YOLO)</strong> to <strong>Modern Web Development</strong>, I bridge the gap between complex algorithms and user-friendly interfaces.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My journey is defined by a passion for what happens "under the hood." Whether it&apos;s managing a comprehensive <strong>Homelab</strong> with Docker or orchestrating CI/CD pipelines, I thrive on solving critical system challenges. I believe that understanding the infrastructure is key to writing efficient, high-performance code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently, I am expanding my horizons by integrating <strong>AI technologies</strong> into web applications (like my recent AI VTuber project). I am actively seeking opportunities in <strong>Web Development</strong> or <strong>System Administration</strong> where I can contribute my "full-stack" mindset—from the database to the deployment—to build something amazing.
          </p>
        </CardContent>
      </Card>

    </motion.div>
  );
}
