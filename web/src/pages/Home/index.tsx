import React, { useState, useCallback, SyntheticEvent } from 'react';
import { FiEdit, FiBox, FiSearch, FiXCircle, FiHash } from 'react-icons/fi';

import api from '../../services/api';

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
  ResultText,
  Actions,
  ShowTextareaButton,
  AddHashtagPrefixButton,
} from './styles';

const Home: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordsText, setKeywordsText] = useState<string>('');
  const [addPrefixHash, setAddPrefixHash] = useState(false);

  const handleToogleShowTextarea = useCallback(() => {
    if (!showTextarea) {
      let compiledKeywordsToText;
      if (addPrefixHash) {
        compiledKeywordsToText = `#${keywords.join(',#')}`;
      } else {
        compiledKeywordsToText = keywords.join(',');
      }
      setKeywordsText(compiledKeywordsToText);
    } else {
      let compiledKeywordsToArray = keywordsText.split(',').filter((word) => {
        return word.trim() !== '';
      });

      compiledKeywordsToArray = compiledKeywordsToArray.map((word) => {
        return word.trim().replace(/#/g, '');
      });

      setKeywords(compiledKeywordsToArray);
    }

    setShowTextarea(!showTextarea);
  }, [showTextarea, keywords, keywordsText, addPrefixHash]);

  const handleSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();

      // const fakeWords = [
      //   'Palavra 1',
      //   'Palavra 2',
      //   'Palavra 3',
      //   'Palavra 4',
      //   'Palavra 5',
      //   'Palavra 7',
      // ];

      async function loadKeywords(): Promise<void> {
        try {
          const { data } = await api.get(`?theme=${subject}`);
          const keywordsLoaded: string[] = data.RESULTS;
          setKeywords(keywordsLoaded);
          setIsLoading(false);
        } catch (err) {
          console.log(err); // eslint-disable-line
          setKeywords([]);
        } finally {
          setIsLoading(false);
        }
      }

      if (subject.trim() !== '') {
        setIsLoading(true);
        loadKeywords();
        setShowTextarea(false);
      }
    },
    [subject],
  );

  const handleTextareaChange = useCallback(
    (event: React.FormEvent<HTMLTextAreaElement>) => {
      setKeywordsText(event.currentTarget.value);
    },
    [],
  );

  const handleSubjectChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setSubject(event.currentTarget.value);
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

  const handleToogleAddPrefix = useCallback(() => {
    setAddPrefixHash(!addPrefixHash);
  }, [addPrefixHash]);

  return (
    <Container>
      <Content>
        <Title># Keyword suggester</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="param"
            placeholder="subject"
            onChange={handleSubjectChange}
          />
          <SearchButton type="submit" disabled={isLoading}>
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
                    <span>
                      {addPrefixHash && '#'}
                      {word}
                    </span>
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

          <Actions>
            {!showTextarea && (
              <AddHashtagPrefixButton
                onClick={handleToogleAddPrefix}
                selected={addPrefixHash}
              >
                <FiHash />
              </AddHashtagPrefixButton>
            )}
            <ShowTextareaButton
              onClick={handleToogleShowTextarea}
              disabled={isLoading}
            >
              {!showTextarea && (
                <>
                  <FiEdit />
                  <span>Text mode</span>
                </>
              )}
              {showTextarea && (
                <>
                  <FiBox />
                  <span>Edit mode</span>
                </>
              )}
            </ShowTextareaButton>
          </Actions>
        </ResultContent>
      </Content>
    </Container>
  );
};

export default Home;
