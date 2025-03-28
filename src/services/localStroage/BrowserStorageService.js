
class BrowserStorageService {
  static get(key) {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key);
    }
    return null;
  }

  static set(key, value) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value);
    }
  }

  static remove(key) {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  }

  static clear() {
    if (typeof window !== 'undefined') {
      window.localStorage.clear();
    }
  }
}

export default BrowserStorageService;
