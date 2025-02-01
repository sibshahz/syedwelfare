"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { signupSchema, type SignupValues } from "@repo/zod-utils/schemas"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { postRegister } from "@/lib/api/auth"
import { redirect } from "next/navigation"
import { useAuth, User } from "./auth-provider"

export function SignupForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
   const { setUser } = useAuth();

  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(data: SignupValues) {
    setIsLoading(true)
    // Here you would typically send the data to your backend
    const result = await postRegister(data);
    if (result instanceof Error) {
      console.error("Failed to signup:", result)
      setUser(null);
      setIsLoading(false);
      const errorResponse:any = result;
      setErrorMessage(errorResponse?.response?.data?.error || "An error occurred");
      return
    }else{
      if (typeof result === "object" && result !== null && "data" in result) {
        setUser(result.data as User);
        redirect("/dashboard");
      } else {
        console.error("Unexpected result format:", result);
        setUser(null);
      }
    }

  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>Enter your email below to signup for an account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Signup"}
              </Button>
            </form>
          </Form>
          {
            errorMessage && <div className="text-red-600 text-sm py-4">{errorMessage}</div>
          }
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/signin" className="underline underline-offset-4">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

