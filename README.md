ProfileLinksComponent - включает в себя 2 компонента: ProfileComponent, LinksComponent.

LinksComponent - линки Daily, Weekly, Monthly - которые переключают карточки на разные данные.
ProfileComponent - фотография пользователя, параграф "Report for", заголовок с именем и фамилией пользователя.

CardItem - карточка, включает в себя название(заголовок по которому смотрим цвет карточки), к-во hrs, и в соответствии какой линк нажат за последние день\неделя\месяц.

CardList - включает в себя все карточки (CardItem).

MainComponent - включает в себя все компоненты (ProfileLinksComponent и CardList).

В App MainComponent.

Для пропсов используем useContext.
Для линков используем Route
