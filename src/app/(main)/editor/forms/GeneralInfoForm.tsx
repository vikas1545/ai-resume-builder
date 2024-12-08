

import { generalInfoSchema, GeneralInfoValues } from "@/src/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, } from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";


export default function GeneralInfoForm() {
    const form = useForm<GeneralInfoValues>({
        resolver: zodResolver(generalInfoSchema),
        defaultValues: {
            title: "",
            description: ""
        }
    })

    return (
        <div className="mx-auto max-w-xl space-y-6">
            <div className="space-y-1.5 text-center">
                <h2 className="text-2xl font-semibold">General info</h2>
                <p className="text-sm text-muted-foreground">This will not appear on your resume</p>
            </div>

            <Form {...form}>
                <form className="space-y-3">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="My cool resume" autoFocus />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="A resume for my next job" autoFocus />
                                </FormControl>
                                <FormDescription>Describe what this resume is for</FormDescription>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}