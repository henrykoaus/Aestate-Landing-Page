import {createApp} from '@genkit-ai/next';
import {notFound} from 'next/navigation';

export const {GET, POST} = createApp();

export const dynamic = 'force-dynamic';

notFound();
