type PageInfo = {
  title: string;
}
type Page = 'home' | 'about' | 'contact';

// Key: Page
// Value: PageInfo
const nav: Record<Page, PageInfo> = {
  home: { title: 'Home'},
  about: {title: 'about'},
  contact: {title: 'contact'};
}