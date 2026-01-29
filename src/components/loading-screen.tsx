"use client";

import { Progress } from "@/components/ui/progress";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  isLoading: boolean;
  progress: number;
}

export default function LoadingScreen({ isLoading, progress }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-full max-w-md p-8 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary">
          {config.communityName}
        </h1>
        <p className="text-muted-foreground mt-2">{config.communityNameSuffix}</p>
        <div className="mt-8">
          <Progress value={progress} className="h-2 w-full" />
          <p className="mt-4 text-sm font-medium text-primary">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
}
