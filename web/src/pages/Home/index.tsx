import React, { useState, useCallback, SyntheticEvent } from 'react';
import { FiEdit, FiBox, FiSearch, FiXCircle } from 'react-icons/fi';

import {
  Container,
  Content,
  Title,
  Form,
  Input,
  SearchButton,
  ResultContent,
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
      const compiledKeywords = keywords.join(',');
      setKeywordsText(compiledKeywords);
    } else {
      const compiledKeywordsText = keywordsText.split(',').filter((word) => {
        return word.trim() !== '';
      });
      setKeywords(compiledKeywordsText);
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

    setShowTextarea(false);
    setKeywords([...fakeWords]);
  }, []);

  const handleTextareaChange = useCallback(
    (event: React.FormEvent<HTMLTextAreaElement>) => {
      setKeywordsText(event.currentTarget.value);
    },
    [],
  );

  const handleRemoveItem = useCallback(
    (id) => {
      const updatedKeywords = keywords.filter((_word, index) => index !== id);
      setKeywords(updatedKeywords);
    },
    [keywords],
  );

  return (
    <Container>
      <Content>
        <Title># Keyword suggester</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="param" placeholder="subject" />
          <SearchButton type="submit">
            <FiSearch />
            <span>Search</span>
          </SearchButton>
        </Form>

        <ResultContent>
          {!showTextarea && (
            <Result>
              {keywords &&
                keywords.map((word, index) => (
                  <Item key={index}>
                    <span>{word}</span>
                    <FiXCircle onClick={() => handleRemoveItem(index)} />
                  </Item>
                ))}
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
            {!showTextarea && (
              <>
                <FiEdit />
                <span>Edit mode</span>
              </>
            )}
            {showTextarea && (
              <>
                <FiBox />
                <span>Visual mode</span>
              </>
            )}
          </ShowTextareaButton>
        </ResultContent>
      </Content>
    </Container>
  );
};

export default Home;
