import { TextInput, Checkbox, Button, Group, Box, Card, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import { SentimentContext } from '../../providers/sentimentProvider';
import { notifications, Notifications } from '@mantine/notifications';
import { IconMoodAngry, IconMoodHappy } from '@tabler/icons-react';

import './review.scss'
export default function Review() {
    const { getSentiment } = useContext(SentimentContext)
    const form = useForm({
        initialValues: {
            name: '',
            review: '',
        },
    });

    function submitSentiment(review) {
        getSentiment(review).then((res) => {
            if (res === 'Positive') {
                showPositive()
                console.log(res)
            } else {
                showNegative()
                console.log(res)
            }
        })
    }

    function showPositive() {
        notifications.show({ color: 'green', icon: <IconMoodHappy />, message: 'Thank you for your positive review!' });
    }
    function showNegative() {
        notifications.show({ color: 'red', icon: <IconMoodAngry />, message: "We're sorry that you feel this way!" });
    }

    return (
        <Card className='review' shadow="md" padding="lg" radius="md" withBorder>
            <Notifications position="bottom-center" zIndex={2077} />
            <Box maw={300} mx="auto">
                <form onSubmit={form.onSubmit((values) => submitSentiment(values.review))}>
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