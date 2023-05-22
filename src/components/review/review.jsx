import { TextInput, Checkbox, Button, Group, Box, Card, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import { SentimentContext } from '../../providers/sentimentProvider';
import { notifications, Notifications } from '@mantine/notifications';
import { IconMoodSad, IconThumbUp, IconThumbDown, IconMoodHappy, IconNumber1 } from '@tabler/icons-react';
import { Center, SegmentedControl } from '@mantine/core';

import './review.scss'
export default function Review() {
    const { getSentiment } = useContext(SentimentContext)
    const form = useForm({
        initialValues: {
            // name: '',
            review: '',
            ground_truth: '',
        },
        validate: {
            ground_truth: (value) => {
                if (value === '') {
                    notifications.show({ color: 'orange', message: 'Please add a thumbs up or thumbs down.' });
                }
                return value !== '' ? null : 'not filled in '
            }
        }
    });

    function submitSentiment(values) {
        let review = values.review
        console.log(values)
        getSentiment(values).then((res) => {
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
        notifications.show({ color: 'red', icon: <IconMoodSad />, message: "We're sorry that you feel this way!" });
    }

    return (
        <Card className='review' shadow="md" padding="lg" radius="md" withBorder>
            <Notifications position="bottom-center" zIndex={2077} />
            <Box maw={300} mx="auto">
                <form onSubmit={form.onSubmit((values) => submitSentiment(values))}>
                    {/* <TextInput
                        withAsterisk
                        label="Name"
                        placeholder="Name"
                        {...form.getInputProps('name')}
                    /> */}
                    <SegmentedControl color={form.values.ground_truth === 'Positive' ? 'green' : 'red'}
                        data={[
                            {
                                value: 'Positive',
                                color: 'green',
                                label: (
                                    <Center>
                                        <IconThumbUp colo size="1rem" />
                                        {/* <Box ml={10}>Preview</Box> */}
                                    </Center>
                                ),
                            },
                            {
                                value: 'Negative',
                                label: (
                                    <Center>
                                        <IconNumber1 size="1rem" />
                                        {/* <Box ml={10}>Code</Box> */}
                                    </Center>
                                ),
                            },
                        ]}
                        {...form.getInputProps('ground_truth')}
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
