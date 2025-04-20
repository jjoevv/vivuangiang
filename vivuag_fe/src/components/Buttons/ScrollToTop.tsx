import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosition = window.history.state?.scrollPosition;
    if (storedPosition !== undefined) {
      window.scrollTo(0, storedPosition);
    } else {
      window.scrollTo(0, 0); // Mặc định scroll to top nếu không có trạng thái cuộn trước đó
    }

    // Lưu vị trí cuộn khi người dùng rời trang
    const handleBeforeUnload = () => {
      const currentScrollPosition = window.scrollY;
      navigate(pathname, { state: { scrollPosition: currentScrollPosition }, replace: true });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname, navigate]);

  return null;
};

export default ScrollToTop