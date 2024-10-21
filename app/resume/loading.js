'use client'

import { Card, CardContent, CardHeader } from "@/components/Card"
import { Skeleton } from "@/components/Skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 py-32 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-10 w-40 mb-4" />

        <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="w-full">
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-32" />
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {['Projects', 'Employment', 'Education', 'Skills'].map((section, index) => (
              <div key={section} className="mb-8">
                <Skeleton className="h-8 w-40 mb-4" />
                {index === 0 && (
                  <div className="space-y-6">
                    {[...Array(2)].map((_, i) => (
                      <Card key={i} className="bg-emerald-50">
                        <CardContent className="p-4">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-1/2 mb-2" />
                          <div className="space-y-1">
                            {[...Array(3)].map((_, j) => (
                              <Skeleton key={j} className="h-4 w-full" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
                {index === 1 && (
                  <Card className="bg-emerald-50">
                    <CardContent className="p-4">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2 mb-2" />
                      <div className="space-y-1 mt-2">
                        {[...Array(4)].map((_, i) => (
                          <Skeleton key={i} className="h-4 w-full" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
                {index === 2 && (
                  <div className="space-y-4">
                    {[...Array(2)].map((_, i) => (
                      <Card key={i} className="bg-emerald-50">
                        <CardContent className="p-4">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-1/2" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
                {index === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(3)].map((_, i) => (
                      <Card key={i} className="bg-emerald-50">
                        <CardContent className="p-4">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <div className="flex flex-wrap gap-2">
                            {[...Array(4)].map((_, j) => (
                              <Skeleton key={j} className="h-6 w-20" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}