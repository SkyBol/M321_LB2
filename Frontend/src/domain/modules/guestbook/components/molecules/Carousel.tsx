import styled from 'styled-components';
import './CarouselStyle.css';
import { useEffect, useState } from 'react';
import GuestbookService from '../../services/GuestbookService';
import GuestbookEntry from '../../models/GuestbookEntry.model';
import { useParams } from 'react-router-dom';

const Carousel = () => {
  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]);
  const { guestbookId } = useParams();

  useEffect(() => {
    GuestbookService.getAll()
      .then((res) => {
        setGuestbookEntries(res.data);
      })
      .catch((error) => {
        console.error("Error fetching guestbook details:", error);
      });
  }, [guestbookId]);

  const CardList = styled.ul<{ count: number }>`
    --count: ${({ count }) => count};
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    outline: 2px dotted magenta;
    z-index: 1;
  `;

  // Function to limit description to 3 lines or 150 characters
  const getTruncatedDescription = (description: string) => {
    const maxCharacters = 100;
    const truncated = description.length > maxCharacters ? `${description.substring(0, maxCharacters)}...` : description;
    return truncated;
  };

  // Filter to ensure only valid entries (with both name and description)
  const validEntries = guestbookEntries.filter(entry => entry.name && entry.description);

  // Function to get 10 random entries
  const getRandomEntries = (entries: GuestbookEntry[], count: number) => {
    const shuffled = entries.sort(() => 0.5 - Math.random()); // Shuffle the entries
    return shuffled.slice(0, count); // Return the first 'count' entries
  };

  const randomEntries = getRandomEntries(validEntries, 8);

  return (
    <div className="void" id="void">
      <div className="crop">
        <CardList count={randomEntries.length}>
          {randomEntries.map((entry, index) => (
            <li className='list' key={index}>
              <div className="card">
                <a href="">
                  <span className="model-name">{entry.name}</span>
                  <span>{getTruncatedDescription(entry.description)}</span>
                </a>
              </div>
            </li>
          ))}
        </CardList>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask"></div>
      <div className="center-circle"></div>
    </div>
  );
};

export default Carousel;
