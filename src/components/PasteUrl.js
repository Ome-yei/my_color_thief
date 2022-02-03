import styled from 'styled-components';


export default function PasteUrl({ handleInputChange, handleSubmit, inputUrl }) {
  return (
    <PasteUrlForm onSubmit={handleSubmit}>
      <PasteUrlInput type='text' value={inputUrl} onChange={handleInputChange} />
      <PasteUrlButton>Get Colors</PasteUrlButton>
    </PasteUrlForm>
  )
}

const PasteUrlInput = styled.input`
  border: 1px solid #e1e1e1;
  padding: .2em 1em;
  border-radius: .375em 0 0 .375em;
  width: 100%
`;

const PasteUrlButton = styled.button`
border: 1px solid #e1e1e1;
  margin-left: -1px;
  border-radius: 0 6px 6px 0;
  padding: .2em .75em;
  cursor: pointer;
  white-space: nowrap;
`;

const PasteUrlForm = styled.form`
  display: flex;
  align-items: flex-start;
  max-width: 400px;
  margin: 1.2em auto;
`;