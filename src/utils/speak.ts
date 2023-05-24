interface ISpeakOptions {
  voice?: string;
  pitch?: number;
}

export function speak(text: string, options: ISpeakOptions = { voice: "Google português do Brasil", pitch: 1 }) {
  const utterance = new SpeechSynthesisUtterance(text);

  const voice = speechSynthesis.getVoices().findIndex(({ name }) => name === options.voice);

  utterance.voice = speechSynthesis.getVoices()[voice];
  utterance.pitch = options?.pitch || 1;

  speechSynthesis.speak(utterance);
}
