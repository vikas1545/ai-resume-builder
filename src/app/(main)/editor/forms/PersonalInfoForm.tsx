import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { PersonalInfoSchema, PersonalInfoValues } from "@/src/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


export default function PersonalInfoForm() {
    const form = useForm<PersonalInfoValues>({
        resolver: zodResolver(PersonalInfoSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            city: '',
            country: '',
            phone: '',
            email: ''
        }
    });

    useEffect(() => {
        const { unsubscribe } = form.watch(async () => {
            const isValid = await form.trigger();
            if (!isValid) return;
            //update resume data
        })

        return unsubscribe;
    }, [form])

    return (
        <div className="max-auto max-w-xl space-y-6">
            <div className="space-y-1.5 text-center">
                <h2 className="text-2xl font-semibold">Personal info</h2>
                <p className="text-sm text-muted-foreground">Tell us about yourself.</p>
            </div>

            <Form {...form}>
                <form className="space-y-3">
                    <FormField
                        control={form.control}
                        name='photo'
                        render={({ field: { value, ...fieldValues } }) => (
                            //here we need to avoid value as in input value is controlled by browser in file type input
                            <FormItem>
                                <FormLabel>Your Photo</FormLabel>
                                <FormControl>
                                    <Input {...fieldValues} type="file" accept="image/*" onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        fieldValues.onChange(file)
                                    }} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Title</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="tel" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
        </div>
    )
}