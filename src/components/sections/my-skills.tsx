"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, Code2, Wrench } from 'lucide-react';

const skills = {
    "System & DevOps": {
        icon: Terminal,
        items: [
            { name: "Linux (Fedora)", slug: "fedora" }, // Generic linux icon for fedora base
            { name: "Docker", slug: "docker" },
            { name: "Portainer", slug: "portainer" },
            { name: "Nginx", slug: "nginx" },
            { name: "Git", slug: "git" },
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "Jellyfin", slug: "jellyfin" },
            { name: "GitHub", slug: "github" }
        ]
    },
    "Development": {
        icon: Code2,
        items: [
            { name: "React", slug: "react" },
            { name: "Next.js", slug: "nextdotjs" }, // Simple Icons slug is nextdotjs
            { name: "TailwindCSS", slug: "tailwindcss" },
            { name: "Python", slug: "python" },
            { name: "C++", slug: "cplusplus" },
            { name: "Java", slug: "android" }, // using android logo as context is android studio
            { name: "HTML", slug: "html5" },
            { name: "CSS", slug: "css" },
            { name: "JavaScript", slug: "javascript" },
            { name: "TypeScript", slug: "typescript" },
            { name: "SQL", slug: "sql" }

        ]
    },
    "Tools & Others": {
        icon: Wrench,
        items: [
            { name: "VS Code", slug: "google" },
            { name: "Gemini", slug: "googlegemini" }, // Rebranded from Bard
            { name: "ChatGPT", slug: "openai" },
            { name: "Figma", slug: "figma" }
        ]
    }
};

export function MySkills() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 mt-12"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
                <p className="text-muted-foreground mt-2">
                    Tools and technologies I use to build robust systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, { icon: Icon, items }], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                        <Card className="h-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-border/60 hover:border-primary/50 transition-colors duration-300">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2 text-primary">
                                    <Icon size={24} />
                                </div>
                                <CardTitle className="text-lg">{category}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center flex flex-wrap justify-center gap-2 pt-2">
                                {items.map((skill) => (
                                    <Badge
                                        key={skill.name}
                                        variant="secondary"
                                        className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors text-xs flex items-center gap-1.5 py-1"
                                    >
                                        <img
                                            src={`https://cdn.simpleicons.org/${skill.slug}`}
                                            alt=""
                                            className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 dark:invert"
                                            width={14}
                                            height={14}
                                        />
                                        {skill.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
