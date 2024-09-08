import * as rgx from './js_regex_2.js';

rgx.example01();
rgx.example02();
rgx.example03();
rgx.example04();
rgx.example05();
rgx.example06();
rgx.example07();
rgx.example08();
rgx.example09();
rgx.example10();
rgx.example11();
rgx.example12();
rgx.example13();
rgx.example14();
rgx.example15();
rgx.example16();
rgx.example17();
rgx.example18();
rgx.example19();
rgx.example20();
rgx.example21();
rgx.example22();
rgx.example23();
rgx.example24();

/*
# substring: matches any substring that matches with the given substring
    - Literal Characters
    - Unicode Characters: represents character using hexadecimal and denoted by \u

# word boundary: extracts word that matches with the given pattern and denoted by \b

# character classes:
    [some-characters]: matches any one of the some-characters
    [^some-characters]: matches any character except some-characters
    [a-z]: matches any lowercase letter
    [A-Z]: matches any uppercase letter
    [0-9]: matches any digit

# shorthand character classes:
    \d: matches any digit [0-9]
    \w: matches any word (alphanumeric + underscore)
    \s: matches any space (whitespace + newline)
    \D: matches any non-digit
    \W: matches any non-word
    \S: matches any non-space

# quantifiers:
    *: matches 0 or more occurrences of the preceding character or group
    +: matches 1 or more occurrences of the preceding character or group
    ?: matches 0 or 1 occurrence of the preceding character or group
    {n}: matches exactly n occurrences of the preceding character or group
    {n,}: matches n or more occurrences of the preceding character or group
    {n,m}: matches between n and m occurrences of the preceding character or group

# anchors:
    ^: matches the start of the string
    $: matches the end of the string

# groups and capturing:
    (): 
        - creates a capturing group
        - it allows to get a part of the match as a separate item in the result array
        - if we put a quantifier after the parentheses, it applies to the parentheses as a whole

    (?:): 
        - creates a non-capturing group
        - sometimes we need parentheses to correctly apply a quantifier, but we don’t want their contents in results

# alternation:
    |: acts like a logical OR, matches either the pattern on the left or the pattern on the right

# escaping:
    \: escapes a metacharacter, allowing it to be treated as a literal character

# dot (wildcard):
    .: matches any single character (except newline)

# modifiers:
    g (global flag): indicates that the regular expression should match all occurrences in the input string, rather than stopping after the first match
    i (case-insensitive flag): makes the pattern matching case-insensitive
    m (multiline flag): enables multiline mode, where ^ and $ match the start/end of each line within a multiline string
    s (dot-all flag): allows the dot (.) to match newline characters as well
    y (sticky flag): restricts the matching to the start of the string and allows subsequent matches to continue from where the last one left off
    d (description flag): matches substrings that starts/ends with given pattern

# assertion:
    x(?=y): positive lookahead assertion
    x(?!y): negative lookahead assertion
    (?<=y)x: positive lookbehind assertion
    (?<!y)x: negative lookbehind assertion

# u (unicode flag):
    - enables \p in regex
    - uses 4-byte character as a single character, not two 2-byte characters

# unicode property \p:

    letter L:
        lowercase Ll
        uppercase Lu
        modifier Lm
        titlecase Lt
        other Lo

    number N:
        decimal number Nd
        letter number Nl
        other No
    
    punctuation P:
        connector Pc
        dash Pd
        initial quote Pi
        final quote Pf
        open Ps
        close Pe
        other Po
    
    mark M (accents etc):
        spacing combining Mc
        enclosing Me
        non-spacing Mn
    
    symbol S:
        currency Sc
        modifier Sk
        math Sm
        other So

    separator Z:
        line Zl
        paragraph Zp
        space Zs
    
    other C:
        control Cc
        format Cf
        not assigned Cn
        private use Co
        surrogate Cs

    other alphabetic: OAlpha
    alphabetic: Alpha [ letter, letter number, other alphabetic ]
    script: Script=language-name [ Script=Arabic, Script=Han ]
    hexadecimal: Hex_Digit

# Backreferences:
    $&: inserts the whole match
    $`: inserts a part of the string before the match
    $': inserts a part of the string after the match
    $n: if n is a 1-2 digit number, then it inserts the contents of n-th parentheses, more about it in the chapter Capturing groups
    $$: inserts character $
    $<name>: inserts the contents of the parentheses with the given name, more about it in the chapter Capturing groups */
