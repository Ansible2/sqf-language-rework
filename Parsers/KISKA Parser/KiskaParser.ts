// select header comment
// /(?<=\/\* \-+\n)([\s\S]*?)(?=\n+\-+ \*\/\n)/i

// select description 
// /(?<=description:\n*)([\s\S]*)(?=Parameters:)/i

// select parameters
// /(?<=parameters:\n*)([\s\S]*)(?=Returns:)/i

// select indiviual parameters (Requires that "<END>" be place at the end of the parameters string) 
// /(?<=^(\t| {0,4}))(\d:)([\s\S]*?)(?=(^(\t| {0,4}))(\d:)|<END>)/gim

// select returns
// /(?<=Returns:\n*)([\s\S]*)(?=Examples:)/i

// select examples
// /(?<=Example\w*:\n*)([\s\S]*)(?=author[\w\W]*?:)/i