import React from 'react';
import { ScreenContainer, Surface, withTheme } from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const DashboardMostProfitableScreen = props => {
  const { theme } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScreenContainer scrollable={true} hasSafeArea={false}>
      <View>
        <View>
          <View style={styles.Viewls}>
            <Text
              style={[
                styles.Text_9f,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'{League}s'}
            </Text>
          </View>

          <View style={styles.Viewtf} pointerEvents={'auto'}>
            <Surface
              style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }}
              elevation={1}
            >
              <View
                style={[
                  styles.View_78,
                  {
                    borderRadius: 6,
                    backgroundColor: theme.colors.divider,
                    borderColor: theme.colors.divider,
                  },
                ]}
              >
                <View style={styles.ViewlT} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.TextR6,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'NCAAB'}
                  </Text>

                  <Text style={[styles.TextQW, { color: theme.colors.good }]}>
                    {'+$678.20 (6.78U)'}
                  </Text>

                  <Text style={[styles.Textdn, { color: theme.colors.good }]}>
                    {'+12.7% ROI'}
                  </Text>
                </View>

                <View style={styles.Viewzh} pointerEvents={'auto'}>
                  <Text style={{ color: theme.colors.light }}>
                    {'24-12-0 (66.6%)'}
                  </Text>

                  <Text style={{ color: theme.colors.good }}>
                    {'+4.7% CLV'}
                  </Text>

                  <Text style={{ color: theme.colors.good }}>
                    {'+$993.08 Won'}
                  </Text>
                </View>
              </View>
            </Surface>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_9f: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Viewls: {
    opacity: 1,
    marginTop: 18,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  TextR6: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextQW: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textdn: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewlT: {
    width: '60%',
    alignItems: 'flex-start',
  },
  Viewzh: {
    width: '37%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  View_78: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewtf: {
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: 6,
  },
});

export default withTheme(DashboardMostProfitableScreen);
