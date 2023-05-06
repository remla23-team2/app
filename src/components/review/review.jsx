import { TextInput, Checkbox, Button, Group, Box, Card, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import './review.scss'
export default function Review() {
    const form = useForm({
        initialValues: {
            name: '',
            review: '',
        },
    });

    return (
        <Card className='review' shadow="md" padding="lg" radius="md" withBorder>
            <Box maw={300} mx="auto">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        label="Name"
                        placeholder="Name"
                        {...form.getInputProps('name')}
                    />
                    <Textarea
                        withAsterisk
                        label="What do you think of us?"
                        placeholder="I think of my time at Gourmet Groove as..."
                        minRows={6}
                        maxRows={12}
                        {...form.getInputProps('review')}
                    />



                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        </Card>
    );
}