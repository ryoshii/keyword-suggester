import React, { useState, useCallback, SyntheticEvent } from 'react';

import {
  Container,
  Content,
  Title,
  Form,
  Input,
  SearchButton,
  Result,
  Item,
  ShowTextareaButton,
  ResultText,
} from './styles';

const Home: React.FC = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordsText, setKeywordsText] = useState<string>('');

  const handleToogleShowTextarea = useCallback(() => {
    if (!showTextarea) {
      const compiledWordsToText = keywords.join(',');
      setKeywordsText(compiledWordsToText);
    } else {
      const compiledWordsToArray = keywordsText.split(',');
      setKeywords([...compiledWordsToArray]);
    }
    setShowTextarea(!showTextarea);
  }, [showTextarea, keywords, keywordsText]);

  const handleSubmit = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
    const fakeWords = [
      'Palavra 1',
      'Palavra 2',
      'Palavra 3',
      'Palavra 4',
      'Palavra 5',
      'Palavra 7',
    ];

    setKeywords([...fakeWords]);
  }, []);

  const handleTextareaChange = useCallback(
    (event: React.FormEvent<HTMLTextAreaElement>) => {
      setKeywordsText(event.currentTarget.value);
    },
    [],
  );

  return (
    <Container>
      <Content>
        <Title># Keyword suggester</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="param" placeholder="subject" />
          <SearchButton type="submit">Search</SearchButton>
        </Form>
        {!showTextarea && (
          <Result>
            {keywords &&
              keywords.map((word, index) => <Item key={index}>{word}</Item>)}
          </Result>
        )}

        {showTextarea && (
          <ResultText
            name="description"
            onChange={handleTextareaChange}
            defaultValue={keywordsText}
          />
        )}

        <ShowTextareaButton onClick={handleToogleShowTextarea}>
          {!showTextarea && 'Edit mode'}
          {showTextarea && 'Box mode'}
        </ShowTextareaButton>
      </Content>
    </Container>
  );
};

export default Home;
