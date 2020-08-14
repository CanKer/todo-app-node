interface DB {
  username: string;
  password: string;
  brand:    string;
  port:     string;
  key:      string;
  dbname:   string;
  dbUrl:    any;
}

interface Email {
  apikey: string;
  domain: string;
  defaultEmail: string,
  brand:  string
}

interface AWS {
  accessKeyId: string;
  secretAccessKey: string;
  Bucket: string;
  region: string;
  s3BaseUrl: string;
}

interface Nomics{
  url: "https://api.nomics.com/v1",
  apikey: "5a6a8009aa0b08efc9e3d518d32e0caa",

}

export {
  AWS,
  Email,
  DB
}
