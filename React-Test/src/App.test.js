
import React from "react"
import App from "./App"
import EmojiResults from "./EmojiResults"
import userEvent from '@testing-library/user-event'
import {render} from '@testing-library/react'

describe('Emoji Search Testleri', () => {

  let input;

  beforeEach(() => {
    render(<App />)
    input = screen.getByPlaceholderText("Input-Test")

  })
  
  test("Başlık bulundu!", () => {
    expect(screen.getByText("Emoji Search").toBeInDocument)
  })

  test("Bütün emojiler listelendi!", () => {
    const emojis = screen.getAllByText("Test")
    expect(emojis.length).toEqual(20) 
  })

  test("İlgili emoji listelendi" ,  () => {
    const test_emoji = "Laughing"
    userEvent.type(input, test_emoji)
    expect(screen.getByText("Laughing").toBeInDocument)
  })
  

  
})