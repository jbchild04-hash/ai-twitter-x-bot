import { TopicPromptType } from '../commons/types';

export const textOnlyTopicPrompts: TopicPromptType[] = [
  {
    topic: 'Epstien Files',
    userProfession: 'political journalist',
    prompt:
      "Craft a post about the epstien files. Share any insight, tip, fact, or opinion in less than 250 characters. Don't enclose the content in quotation marks and don't use emojis and hashtags.",
  },
  {
    topic: 'American Politics',
    userProfession: 'Political Journalist',
    prompt:
      "Craft a short tweet about the downfall of american culture. Share a compelling insight, tip, fact, or opinion in less than 250 characters. Don't enclose the content in quotation marks and don't use emojis and hashtags.",
  },
  {
    topic: 'SQL',
    userProfession: 'Database Administrator',
    prompt:
      "Craft a short tweet about SQL. Share a compelling insight, tip, fact, or opinion in less than 250 characters. Don't enclose the content in quotation marks and don't use emojis and hashtags.",
  },
  {
    topic: 'Donald Trump sucks',
    userProfession: 'NodeJs Backend Engineer',
    prompt: `Craft a short tweet about how donald trump sucks.Share a compelling insight, tip, fact, or opinion in less than 250 characters. Don't enclose the content in quotation marks and don't use emojis and hashtags.`,
  },
];

export const textAndSnippetTopicPrompts: TopicPromptType[] = [
  {
    topic: 'Data Structures',
    userProfession: 'Backend Engineer',
    prompt:
      "Craft a short tweet about Data Structures. generate an advanced typescript code snippet . Don't use emojis and hashtags.",
  },
  {
    topic: 'Algorithms',
    userProfession: 'Backend Engineer',
    prompt:
      "Craft a short tweet about Algorithms. generate an advanced typescript code snippet to show. Don't use emojis and hashtags.",
  },
  {
    topic: 'API Security',
    userProfession: 'NodeJs Backend Engineer',
    prompt: `Craft a short tweet about API Security. Share a typescript code snippet. Don't use emojis and hashtags.`,
  },
];
