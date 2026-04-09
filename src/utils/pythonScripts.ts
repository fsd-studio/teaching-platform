export const TOKENIZER_SCRIPT = `
    import tokenize
    import token
    import io

    tokens = tokenize.generate_tokens(io.StringIO(code_str).readline)

    extracted_tokens = [
        {
            "type": tok.type,
            "type_name": token.tok_name[tok.type],
            "exact_type": tok.exact_type,
            "exact_type_name": token.tok_name[tok.exact_type],
            "string": tok.string,
            "start": tok.start,
            "end": tok.end
        }
        for tok in tokens
    ]

    extracted_tokens
`;

