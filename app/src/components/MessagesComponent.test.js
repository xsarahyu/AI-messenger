import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import MessagesComponent from './MessagesComponent'


describe('Messages component', () => {
    test('renders Message content', () => {
        const { getByTestId, getByText } = render(<MessagesComponent />)

        const inputField = getByTestId('message-input');

        fireEvent.change(inputField, { target: { value: 'hello' } });

        const sendButton = getByTestId('message-submit');
        fireEvent.click(sendButton);

        const messageContent = getByText("hello")
        expect(messageContent).toBeInTheDocument()
    }),
    test('if input placeholder exist', () => {
        const {getByPlaceholderText } = render(<MessagesComponent />)

        const inputPlaceholder = getByPlaceholderText('Type your message here...')

        expect(inputPlaceholder).toBeInTheDocument()
    }),
    test('if send button exist', () => {
        const { getByTestId} = render(<MessagesComponent />)

        const submitBtn = getByTestId('message-submit')

        expect(submitBtn).toBeInTheDocument()
    })
})

